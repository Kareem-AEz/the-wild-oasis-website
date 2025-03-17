import "@/app/_styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	// title: "The Wild Oasis",
	title: {
		template: "%s | The Wild Oasis ",
		default: "The Wild Oasis | Welcome to paradise",
	},
	description:
		"Luxury cabins hotel, in the heart of the Italian Dolomites, surrounded by beautiful mountains and lush forests. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefinSans.className} bg-primary-950 text-primary-100 flex min-h-screen flex-col antialiased`}
			>
				<Analytics />
				<SpeedInsights />
				<Header />

				<div className="relative grid flex-1 px-8 py-12">
					<main className="mx-auto w-full max-w-7xl">
						<ReservationProvider>{children}</ReservationProvider>
					</main>
				</div>
			</body>
		</html>
	);
}
