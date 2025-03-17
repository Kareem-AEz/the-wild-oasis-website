import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user;
		},
		async signIn({ user, account, profile }) {
			try {
				const currentGuest = await getGuest(user.email);

				if (!currentGuest)
					createGuest({
						email: user.email,
						fullName: user.name,
					});

				return true;
			} catch {
				return false;
			}
		},
		async session({ session }) {
			const guest = await getGuest(session.user.email);
			session.user.guestId = guest.id;
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
