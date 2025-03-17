export default function CabinReservationSkeleton() {
	return (
		<div className="border-primary-800 grid min-h-[480px] grid-cols-[auto_1fr] border">
			{/* DateSelector Skeleton */}
			<div className="flex flex-col justify-between">
				{/* Calendar Skeleton */}
				<div className="place-self-center p-4 pt-12">
					<div className="grid grid-cols-7 gap-1">
						{Array.from({ length: 42 }).map((_, index) => (
							<div
								key={index}
								className="m-1 h-10 w-10 animate-pulse rounded-full bg-gray-200/20"
							></div>
						))}
					</div>
				</div>

				{/* Price Bar Skeleton - Keep the background color for structural context */}
				<div className="bg-accent-500 flex h-[72px] items-center justify-between px-8">
					<div className="flex items-baseline gap-6">
						<div className="h-6 w-20 animate-pulse rounded bg-gray-200/30"></div>
						<div className="h-6 w-16 animate-pulse rounded bg-gray-200/30"></div>
						<div className="h-6 w-24 animate-pulse rounded bg-gray-200/30"></div>
					</div>
				</div>
			</div>

			{/* ReservationForm Skeleton */}
			<div className="flex flex-col">
				{/* Header Skeleton - Keep the background color for structural context */}
				<div className="bg-primary-800 flex h-full items-center justify-between px-16 py-2">
					<div className="h-5 w-24 animate-pulse rounded bg-gray-200/20"></div>
					<div className="h-5 w-32 animate-pulse rounded bg-gray-200/20"></div>
				</div>

				{/* Form Skeleton - Keep the background color for structural context */}
				<div className="bg-primary-900 flex flex-col gap-5 px-16 py-10 text-lg">
					{/* Guests Dropdown Skeleton */}
					<div className="space-y-2">
						<div className="h-6 w-40 animate-pulse rounded bg-gray-200/20"></div>
						{/* Keep form field background color for structural context */}
						<div className="bg-primary-200 h-12 w-full rounded-sm opacity-30"></div>
					</div>

					{/* Textarea Skeleton */}
					<div className="space-y-2">
						<div className="h-6 w-64 animate-pulse rounded bg-gray-200/20"></div>
						{/* Keep form field background color for structural context */}
						<div className="bg-primary-200 h-24 w-full rounded-sm opacity-30"></div>
					</div>

					{/* Button Area Skeleton */}
					<div className="flex items-center justify-end gap-6">
						<div className="h-5 w-48 animate-pulse rounded bg-gray-200/20"></div>
						{/* Keep button background color for structural context but make it more subtle */}
						<div className="bg-accent-500 h-14 w-32 rounded opacity-50"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
