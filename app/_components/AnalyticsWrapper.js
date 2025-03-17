"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";

export default function AnalyticsWrapper() {
	const [isBlocked, setIsBlocked] = useState(false);

	useEffect(() => {
		// Check if analytics are blocked
		const checkAnalytics = async () => {
			try {
				const response = await fetch("/_vercel/insights/script.js");
				if (!response.ok) {
					setIsBlocked(true);
				}
			} catch (error) {
				setIsBlocked(true);
			}
		};

		checkAnalytics();
	}, []);

	if (isBlocked) {
		return null;
	}

	return (
		<>
			<Analytics />
			<SpeedInsights />
		</>
	);
}
