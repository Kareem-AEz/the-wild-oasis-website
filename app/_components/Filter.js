"use client";

import { filterValues } from "@/app/cabins/_assets/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const capacity = searchParams.get("capacity") || "all";

	const handleClick = (filter) => {
		const params = new URLSearchParams(searchParams);
		if (filter === "all") params.delete("capacity");
		else params.set("capacity", filter);

		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const entries = Object.entries(filterValues.capacity);

	return (
		<div className="border-primary-800 flex border">
			{entries.map(([key, value]) => (
				<button
					className={`hover:bg-primary-700 px-5 py-2 ${capacity === key && "bg-primary-800 text-primary-100"}`}
					key={key}
					onClick={() => handleClick(key)}
				>
					{key === "all"
						? "All"
						: `${key.charAt(0).toUpperCase() + key.slice(1)} (${value.min} - ${value.max === Infinity ? "+" : value.max})`}
				</button>
			))}
		</div>
	);
}

export default Filter;
