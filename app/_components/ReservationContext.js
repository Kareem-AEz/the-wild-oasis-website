"use client";

const { createContext, use, useState } = require("react");

const initialState = { from: undefined, to: undefined };
const reservationContext = createContext();

function ReservationProvider({ children }) {
	const [range, setRange] = useState(initialState);
	function resetRange() {
		setRange(initialState);
	}

	return (
		<reservationContext.Provider value={{ range, setRange, resetRange }}>
			{children}
		</reservationContext.Provider>
	);
}

function useReservation() {
	const context = use(reservationContext);

	if (!context)
		new Error("useReservation must be used within a ReservationProvider");

	return context;
}

export { ReservationProvider, useReservation };
