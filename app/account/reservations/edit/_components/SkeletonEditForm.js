export default function SkeletonEditForm() {
	return (
		<div>
			{/* Title Skeleton */}
			<div className="mb-7">
				<div className="h-8 w-64 animate-pulse rounded bg-gray-200/20"></div>
			</div>

			{/* Form Skeleton */}
			<div className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg">
				{/* Number of Guests Field Skeleton */}
				<div className="space-y-2">
					{/* Label Skeleton */}
					<div className="h-6 w-40 animate-pulse rounded bg-gray-200/20"></div>
					{/* Select Skeleton */}
					<div className="bg-primary-200 h-[52px] w-full rounded-sm opacity-30"></div>
				</div>

				{/* Observations Field Skeleton */}
				<div className="space-y-2">
					{/* Label Skeleton */}
					<div className="h-6 w-72 animate-pulse rounded bg-gray-200/20"></div>
					{/* Textarea Skeleton */}
					<div className="bg-primary-200 h-[100px] w-full rounded-sm opacity-30"></div>
				</div>

				{/* Button Area Skeleton */}
				<div className="flex items-center justify-end">
					{/* Button Skeleton */}
					<div className="bg-accent-500 h-[56px] w-[180px] rounded opacity-50"></div>
				</div>
			</div>
		</div>
	);
}
