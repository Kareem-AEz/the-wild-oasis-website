"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { areIntervalsOverlapping, isPast, isWithinInterval } from "date-fns";
import { redirect } from "next/navigation";
import { getBookedDatesByCabinId } from "./data-service";

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("Not authenticated");

	console.log(formData);

	const data = {
		nationality: formData.get("nationality").split("%")[0],
		countryFlag: formData.get("nationality").split("%")[1],
		nationalID: formData.get("nationalID"),
	};

	if (!/^[A-Za-z0-9\-]{6,20}$/.test(data.nationalID))
		throw new Error("Invalid National ID");

	const { error } = await supabase
		.from("guests")
		.update(data)
		.eq("id", session.user.guestId);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
	// Check if user is authenticated
	const session = await auth();
	if (!session) throw new Error("Not authenticated");

	const newBooking = {
		...bookingData,
		extrasPrice: 0,
		status: "unconfirmed",
		isPaid: false,
		hasBreakfast: false,
		totalPrice: bookingData.cabinPrice,
		guestId: session.user.guestId,
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
	};

	console.log(newBooking);

	const bookedDates = await getBookedDatesByCabinId(bookingData.cabinId);

	// Check if cabin is available
	if (
		bookedDates.some((date) =>
			isWithinInterval(date, {
				start: new Date(bookingData.startDate),
				end: new Date(bookingData.endDate),
			})
		)
	)
		throw new Error("Cabin is already booked for this date");

	// Create booking
	const { error } = await supabase.from("bookings").insert([newBooking]);
	if (error) throw new Error("Booking could not be created");

	// Revalidate page
	revalidatePath(`/cabins/${bookingData.cabinId}`);

	// Redirect to reservations page
	redirect("/cabins/thankyou");
}

export async function deleteBooking(id) {
	// Check if user is authenticated
	const session = await auth();
	if (!session) throw new Error("Not authenticated");

	// Check if booking exists
	const { data, error } = await supabase
		.from("bookings")
		.select("guestId, startDate")
		.eq("id", id)
		.single();
	if (error) throw new Error("Booking could not be found");

	// Check if user is authorized
	if (data.guestId !== session.user.guestId)
		throw new Error("You are not authorized to delete this booking");

	// Check if booking is in the past
	if (isPast(new Date(data.startDate)))
		throw new Error("You can't delete a past booking");

	// Delete booking
	const { error: deleteError } = await supabase
		.from("bookings")
		.delete()
		.eq("id", id);
	if (deleteError) throw new Error("Booking could not be deleted");

	// Revalidate page
	revalidatePath("/account/reservations");
}

export async function editReservation(formData) {
	// Check if user is authenticated
	const session = await auth();
	if (!session) throw new Error("Not authenticated");

	// handling form data
	const data = {
		numGuests: formData.get("numGuests"),
		observations: formData.get("observations"),
	};

	const updateData = {
		numGuests: data.numGuests,
		observations: data.observations,
	};
	// getting booking ID
	const bookingId = formData.get("id");

	// sanitize data
	// Check if the number of guests is valid
	if (!/^[1-9][0-9]*$/.test(data.numGuests))
		throw new Error("Invalid number of guests");
	// Check if the observations are valid
	if (
		data.observations &&
		!/^[a-zA-Z0-9\s.,!?'"()\-\n]{0,500}$/.test(data.observations)
	)
		throw new Error("Invalid observations");

	// Check if booking exists
	const { data: booking, error: bookingError } = await supabase
		.from("bookings")
		.select()
		.eq("id", bookingId)
		.single();
	if (bookingError) throw new Error("Booking could not be updated");

	// Check if user is authorized
	if (booking.guestId !== session.user.guestId)
		throw new Error("You are not authorized to update this booking");

	// updating booking
	const { error: updateError } = await supabase
		.from("bookings")
		.update(updateData)
		.eq("id", bookingId);
	// checking if the update was successful
	if (updateError) throw new Error("Booking could not be updated");

	// Revalidate page
	revalidatePath("/account/reservations");

	// Redirect
	redirect("/account/reservations");
}
