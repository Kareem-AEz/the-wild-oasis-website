import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { filterValues } from "@/app/cabins/_assets/constants";

async function CabinList({ capacity }) {
	const cabins = await getCabins();

	if (cabins.length === 0) return null;
	const filteredCabins = cabins.filter(
		(cabin) =>
			cabin.maxCapacity >= filterValues.capacity[capacity].min &&
			cabin.maxCapacity <= filterValues.capacity[capacity].max
	);

	return (
		<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
			{filteredCabins.map((cabin) => (
				<CabinCard
					cabin={cabin}
					key={cabin.id}
				/>
			))}
		</div>
	);
}

export default CabinList;
