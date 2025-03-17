import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(req, { params }) {
	const { cabinId } = await params;

	try {
		const [cabin, bookedDates] = await Promise.all([
			getCabin(cabinId),
			getBookedDatesByCabinId(cabinId),
		]);

		return new Response(
			JSON.stringify({ data: { cabin, bookedDates }, error: null }),
			{
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "max-age=60, stale-while-revalidate=600",
				},
				status: 200,
			}
		);
	} catch (error) {
		return new Response(JSON.stringify({ error: "Cabin could not be found" }), {
			headers: { "Content-Type": "application/json" },
			status: 404,
		});
	}
}
