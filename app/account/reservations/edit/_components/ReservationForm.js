"use client";
import { editReservation } from "@/app/_lib/actions";
import SpinnerMini from "@/starter/components/SpinnerMini";
import { useFormState, useFormStatus } from "react-dom";

function ReservationForm({ booking, cabin }) {
	return (
		<form
			action={editReservation}
			className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
		>
			<div className="space-y-2">
				<label htmlFor="numGuests">How many guests?</label>
				<select
					name="numGuests"
					id="numGuests"
					className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
					defaultValue={booking.numGuests}
					required
				>
					<option value="">Select number of guests...</option>
					{Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(
						(x) => (
							<option
								value={x}
								key={x}
							>
								{x} {x === 1 ? "guest" : "guests"}
							</option>
						)
					)}
				</select>
			</div>

			<div className="space-y-2">
				<label htmlFor="observations">
					Anything we should know about your stay?
				</label>
				<textarea
					name="observations"
					className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
					defaultValue={booking.observations}
				/>
			</div>

			<div className="flex items-center justify-end gap-6">
				<input
					type="hidden"
					name="id"
					value={booking.id}
				/>
				<Submit />
			</div>
		</form>
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
			{pending ? "Updating..." : "Update reservation"}
		</button>
	);
}
