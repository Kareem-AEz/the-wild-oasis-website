import "@/app/_styles/globals.css";
import AnalyticsWrapper from "./_components/AnalyticsWrapper";
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

	openGraph: {
		title: "The Wild Oasis | Welcome to paradise",
		description:
			"Luxury cabins hotel, in the heart of the Italian Dolomites, surrounded by beautiful mountains and lush forests. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.",
		images: [
			{
				url: "https://the-wild-oasis-website-gold-one.vercel.app/bg.png",
				width: 1200,
				height: 630,
				alt: "The Wild Oasis | Welcome to paradise",
			},
		],
		type: "website",
		url: "https://the-wild-oasis-website-gold-one.vercel.app",
	},

	twitter: {
		card: "summary_large_image",
		title: "The Wild Oasis | Welcome to paradise",
		description:
			"Luxury cabins hotel, in the heart of the Italian Dolomites, surrounded by beautiful mountains and lush forests. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.",
		images: [
			{
				url: "https://the-wild-oasis-website-gold-one.vercel.app/bg.png",
				width: 1200,
				height: 630,
				alt: "The Wild Oasis | Welcome to paradise",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${josefinSans.className} bg-primary-950 text-primary-100 flex min-h-screen flex-col antialiased`}
			>
				<AnalyticsWrapper />
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
