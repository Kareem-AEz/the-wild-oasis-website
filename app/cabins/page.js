import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import CabinListSkeleton from "../_components/CabinListSkeleton";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 15;

export const metadata = {
	title: "Cabins",
};

async function Page({ searchParams: asyncSearchParams }) {
	const searchParams = await asyncSearchParams;
	const capacity = searchParams?.capacity ?? "all";

	return (
		<div>
			<h1 className="text-accent-400 mb-5 text-4xl font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 mb-10 text-lg">
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>

			<div className="mb-10 flex justify-end">
				<Filter />
			</div>

			<Suspense
				fallback={<CabinListSkeleton />}
				key={capacity}
			>
				<CabinList capacity={capacity} />
				<ReservationReminder />
			</Suspense>
		</div>
	);
}

export default Page;
