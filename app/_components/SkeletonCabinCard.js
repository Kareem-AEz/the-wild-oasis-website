export default function SkeletonCabinCard() {
	return (
		<div className="border-primary-800 flex animate-pulse border">
			{/* Image Skeleton */}
			<div className="relative h-52 flex-1 bg-gray-700"></div>

			{/* Content Skeleton */}
			<div className="flex-grow">
				<div className="bg-primary-950 px-7 pt-5 pb-4">
					{/* Title */}
					<div className="mb-3 h-6 w-2/3 rounded bg-gray-700"></div>

					{/* Capacity Info */}
					<div className="mb-2 flex items-center gap-3">
						<div className="h-5 w-5 rounded bg-gray-700"></div>
						<div className="h-5 w-1/2 rounded bg-gray-700"></div>
					</div>

					{/* Price */}
					<div className="flex items-baseline justify-end gap-3">
						<div className="h-8 w-16 rounded bg-gray-700"></div>
						<div className="h-6 w-10 rounded bg-gray-700"></div>
					</div>
				</div>

				{/* Button Skeleton */}
				<div className="bg-primary-950 border-t-primary-800 items-stretch border-t p-2 text-right">
					<div className="border-primary-800 inline-block flex-1 border-l bg-gray-700 px-6 py-4"></div>
				</div>
			</div>
		</div>
	)
}
