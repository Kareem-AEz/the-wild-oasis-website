import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export function middleware(request) {
// 	console.log(request);
// 	return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;
// Middleware 3: Logging Middleware
// export async function middleware(request) {
// 	console.log("Request received at:", request.nextUrl.pathname);
// 	return NextResponse.next();
// }

export const config = {
	matcher: "/account/:path*",
};
