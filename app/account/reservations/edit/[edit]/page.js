import { auth } from "@/app/_lib/auth";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ReservationForm from "../_components/ReservationForm";
import SkeletonEditForm from "../_components/SkeletonEditForm";

export async function generateMetadata({ params }) {
	const { edit: reservationId } = await params;

	// The edit param will be the reservationId
	return {
		title: `Edit Reservation #${reservationId}`,
	};
}

export default async function Page({ params }) {
	const { edit: reservationId } = await params;

	const session = await auth();
	if (!session) throw new Error("Not authenticated");

	return (
		<Suspense fallback={<SkeletonEditForm />}>
			<EditReservationForm
				reservationId={reservationId}
				session={session}
			/>
		</Suspense>
	);
}

async function EditReservationForm({ reservationId, session }) {
	const booking = await getBooking(reservationId);

	// Check if booking exists and belongs to the current user
	if (!booking || booking.guestId !== session.user.guestId) {
		notFound();
	}

	const cabin = await getCabin(booking.cabinId);
	if (!cabin) notFound();

	return (
		<div>
			<h2 className="text-accent-400 mb-7 text-2xl font-semibold">
				Edit Reservation #{reservationId}
			</h2>

			<ReservationForm
				booking={booking}
				cabin={cabin}
			/>
		</div>
	);
}
