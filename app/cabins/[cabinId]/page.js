import CabinReservation from "@/app/_components/CabinReservation";
import CabinReservationSkeleton from "@/app/_components/CabinReservationSkeleton";
import { getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";
import CabinDetails from "./_assets/CabinDetails";

export async function generateMetadata({ params }) {
	const { cabinId } = await params;
	const { id, name, maxCapacity, regularPrice, discount, image, description } =
		await getCabin(cabinId);

	return {
		title: `Cabin ${name} - Discover & Book`,
		description:
			description || "Explore our exclusive cabin in the Dolomites, Italy.",
		openGraph: {
			title: `Cabin ${name} - Stay in Nature`,
			description: description,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: `Cabin ${name}`,
				},
			],
			type: "website",
		},
	};
}

// export async function generateStaticParams() {
// 	const cabins = await getCabins();
// 	const cabinIds = cabins.map((cabin) => ({
// 		cabinId: String(cabin.id),
// 	}));

// 	return cabinIds;
// }

async function page({ params }) {
	const { cabinId } = await params;
	// const { id, name, maxCapacity, regularPrice, discount, image, description } =
	// 	await getCabin(cabinId);
	// const settings = await getSettings();
	// const bookedDates = await getBookedDatesByCabinId(cabinId);

	// const [cabin] = await Promise.all([getCabin(cabinId)]);

	const cabin = await getCabin(cabinId);

	return (
		<div className="mx-auto mt-8 max-w-6xl">
			<CabinDetails cabin={cabin} />

			<div>
				<h2 className="text-accent-400 mb-10 text-center text-5xl font-semibold">
					Reserve today. Pay on arrival.
				</h2>

				<Suspense fallback={<CabinReservationSkeleton />}>
					<CabinReservation
						cabinId={cabinId}
						cabin={cabin}
					/>
				</Suspense>
			</div>
		</div>
	);
}

export default page;
