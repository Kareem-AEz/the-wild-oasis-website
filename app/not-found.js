import Link from "next/link";

function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center space-y-6">
			<h1 className="text-5xl font-semibold">Page not found</h1>
			<p className="text-2xl text-gray-500">
				The page you are looking for does not exist. Please check the URL or go
				back to the homepage.
			</p>
			<Link
				href="/"
				className="bg-accent-500 text-primary-800 inline-block rounded-md px-6 py-3 text-2xl font-semibold shadow-sm"
			>
				Go back home
			</Link>
		</main>
	);
}

export default NotFound;
