"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "@/starter/components/SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
	const [isPending, startTransition] = useTransition();
	function handleDelete() {
		startTransition(() => {
			onDelete(bookingId);
		});
	}
	return (
		<button
			disabled={isPending}
			onClick={handleDelete}
			className="group text-primary-300 hover:bg-accent-600 hover:text-primary-900 flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase transition-colors"
		>
			{isPending ? (
				<span className="mx-auto">
					<SpinnerMini />
				</span>
			) : (
				<>
					<TrashIcon className="text-primary-600 group-hover:text-primary-800 h-5 w-5 transition-colors" />
					<span className="mt-1">Delete</span>
				</>
			)}
		</button>
	);
}

export default DeleteReservation;
