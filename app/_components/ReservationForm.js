"use client";

import { differenceInCalendarDays, formatISO } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import { isAlreadyBooked } from "./DateSelector";
import { useFormStatus } from "react-dom";

function ReservationForm({ cabin, user, bookedDates }) {
	const { range, resetRange } = useReservation();
	const { maxCapacity, regularPrice, discount, id } = cabin;

	const isBookingDisabled = isAlreadyBooked(range, bookedDates);

	const bookingData = {
		cabinId: cabin.id,
		startDate: range?.from && formatISO(new Date(range?.from).toISOString()),
		endDate: range?.to && formatISO(new Date(range?.to).toISOString()),
		numNights: Number(differenceInCalendarDays(range?.to, range?.from)),
		cabinPrice: Number(
			(regularPrice - discount) *
				differenceInCalendarDays(range?.to, range?.from)
		),
	};

	const createBookingWithData = createBooking.bind(null, bookingData);

	return (
		<div className="flex flex-col">
			<div className="bg-primary-800 text-primary-300 flex h-full items-center justify-between px-16 py-2">
				<p>Logged in as</p>

				<div className="flex items-center gap-4">
					<img
						// Important to display google profile images
						referrerPolicy="no-referrer"
						className="h-8 rounded-full"
						src={user?.image}
						alt={user?.name}
					/>
					<p>{user?.name}</p>
				</div>
			</div>

			<form
				action={(formData) => {
					createBookingWithData(formData);
					resetRange();
				}}
				className="bg-primary-900 flex flex-grow flex-col gap-5 px-16 py-10 text-lg"
			>
				<div className="space-y-2">
					<label htmlFor="numGuests">How many guests?</label>
					<select
						name="numGuests"
						id="numGuests"
						className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
						required
					>
						<option
							value=""
							key=""
						>
							Select number of guests...
						</option>
						{Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
							<option
								value={x}
								key={x}
							>
								{x} {x === 1 ? "guest" : "guests"}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-2">
					<label htmlFor="observations">
						Anything we should know about your stay?
					</label>
					<textarea
						name="observations"
						id="observations"
						className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
						placeholder="Any pets, allergies, special requirements, etc.?"
					/>
				</div>

				<div className="flex items-center justify-end gap-6">
					<div className="h-16">
						{range?.from && range?.to ? (
							!isBookingDisabled ? (
								<Submit />
							) : (
								<p className="text-primary-300 text-base">
									The selected dates are already booked
								</p>
							)
						) : (
							<p className="text-primary-300 text-base">
								Start by selecting dates
							</p>
						)}
					</div>
				</div>
			</form>
		</div>
	);
}

export default ReservationForm;

function Submit() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
		>
			{pending ? "Reserving..." : "Reserve now"}
		</button>
	);
}
