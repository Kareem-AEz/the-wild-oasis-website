import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

async function CabinReservation({ cabinId, cabin }) {
	const [settings, bookedDates, session] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabinId),
		auth(),
	]);

	return (
		<div className="border-primary-800 grid min-h-[480px] grid-cols-[auto_1fr] border">
			<DateSelector
				settings={settings}
				cabin={cabin}
				bookedDates={bookedDates}
			/>
			{session ? (
				<ReservationForm
					cabin={cabin}
					user={session?.user}
					bookedDates={bookedDates}
				/>
			) : (
				<LoginMessage />
			)}
		</div>
	);
}

export default CabinReservation;
