// components/CabinListSkeleton.tsx
import SkeletonCabinCard from "./SkeletonCabinCard";

export default function CabinListSkeleton() {
	return (
		<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
			{Array.from({ length: 4 }).map((_, index) => (
				<SkeletonCabinCard key={index} />
			))}
		</div>
	);
}
