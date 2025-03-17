import Link from "next/link";

export default function NotFound() {
	return (
		<div className="text-center">
			<h2 className="text-accent-400 mb-8 text-2xl font-semibold">
				Reservation Not Found
			</h2>

			<div className="text-primary-200 space-y-4 text-lg">
				<p>We couldn&apos;t find the reservation you&apos;re looking for.</p>
				<p>This could be because:</p>
				<ul className="mx-auto w-max list-disc space-y-2 pl-4">
					<li className="w-max">The reservation ID is incorrect</li>
					<li className="w-max">The reservation has been cancelled</li>
					<li className="w-max">
						You don&apos;t have permission to view this reservation
					</li>
				</ul>
			</div>

			<div className="mt-12">
				<Link
					href="/account/reservations"
					className="text-accent-500 hover:text-accent-400 flex items-center justify-center gap-2 text-lg underline transition-colors"
				>
					&larr; Back to your reservations
				</Link>
			</div>
		</div>
	);
}
