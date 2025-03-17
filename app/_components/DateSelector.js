"use client";

import { differenceInCalendarDays, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

export function isAlreadyBooked(range, datesArr) {
	return (
		range?.from &&
		range?.to &&
		datesArr.some((date) =>
			isWithinInterval(date, { start: range?.from, end: range?.to })
		)
	);
}

function DateSelector({ cabin, settings, bookedDates }) {
	const { range, setRange, resetRange } = useReservation();

	// const displayedDates = isAlreadyBooked(range, bookedDates) ? [] : range;

	// CHANGE
	const { regularPrice, discount } = cabin;
	const numNights = differenceInCalendarDays(range?.to, range?.from);
	const cabinPrice = numNights * (regularPrice - discount);

	// SETTINGS
	const { maxBookingLength, minBookingLength } = settings;

	return (
		<div className="flex flex-col justify-between">
			<DayPicker
				className="place-self-center p-4 pt-12"
				mode="range"
				min={minBookingLength}
				max={maxBookingLength}
				startMonth={new Date()}
				hidden={{ before: new Date() }}
				endMonth={new Date(new Date().getFullYear() + 4, 11, 31)}
				captionLayout="dropdown"
				numberOfMonths={2}
				selected={range}
				onSelect={setRange}
				disabled={bookedDates}
				footer={
					<div className="mt-2 flex justify-center">
						<span className="text-accent-400 font-bold">
							Minimum {minBookingLength} nights
						</span>
						<span className="text-accent-400 font-bold">
							&nbsp; &bull; &nbsp;
						</span>
						<span className="text-accent-400 font-bold">
							Maximum {maxBookingLength} nights
						</span>
					</div>
				}
			/>

			<div className="bg-accent-500 text-primary-800 flex h-[72px] items-center justify-between px-8">
				<div className="flex items-baseline gap-6">
					<p className="flex items-baseline gap-2">
						{discount > 0 ? (
							<>
								<span className="text-2xl">${regularPrice - discount}</span>
								<span className="text-primary-700 font-semibold line-through">
									${regularPrice}
								</span>
							</>
						) : (
							<span className="text-2xl">${regularPrice}</span>
						)}
						<span className="">/night</span>
					</p>
					{numNights ? (
						<>
							<p className="bg-accent-600 px-3 py-2 text-2xl">
								<span>&times;</span> <span>{numNights}</span>
							</p>
							<p>
								<span className="text-lg font-bold uppercase">Total</span>{" "}
								<span className="text-2xl font-semibold">${cabinPrice}</span>
							</p>
						</>
					) : null}
				</div>

				{range?.from || range?.to ? (
					<button
						className="border-primary-800 border px-4 py-2 text-sm font-semibold"
						onClick={resetRange}
					>
						Clear
					</button>
				) : null}
			</div>
		</div>
	);
}

export default DateSelector;
