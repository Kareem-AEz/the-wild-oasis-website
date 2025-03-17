import Spinner from "@/starter/components/Spinner";

function Loading() {
	return (
		<div className="flex h-full items-center justify-center">
			<div className="text-center">
				<Spinner />
				<p className="text-primary-200 mt-4 text-lg">
					Loading your reservations...
				</p>
			</div>
		</div>
	);
}

export default Loading;
