export default function CabinSkeleton() {
	return (
		<div className="mx-auto mt-8 max-w-6xl animate-pulse">
			{/* Skeleton Layout */}
			<div className="border-primary-800 mb-24 grid grid-cols-[3fr_4fr] gap-20 border px-10 py-3">
				{/* Image Skeleton */}
				<div className="relative h-[400px] -translate-x-3 scale-[1.15] bg-gray-700"></div>

				{/* Content Skeleton */}
				<div>
					{/* Title */}
					<div className="bg-primary-950 mb-5 h-14 w-[80%]"></div>

					{/* Description */}
					<div className="mb-10 space-y-2">
						<div className="h-4 w-full bg-gray-700"></div>
						<div className="h-4 w-[90%] bg-gray-700"></div>
						<div className="h-4 w-[80%] bg-gray-700"></div>
					</div>

					{/* Info List */}
					<ul className="mb-7 flex flex-col gap-4">
						{[...Array(3)].map((_, i) => (
							<li
								key={i}
								className="flex items-center gap-3"
							>
								<div className="h-5 w-5 bg-gray-700"></div>
								<div className="h-4 w-[70%] bg-gray-700"></div>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Reserve Section */}
			<div className="text-center">
				<div className="mx-auto h-8 w-[60%] bg-gray-700"></div>
			</div>
		</div>
	)
}
