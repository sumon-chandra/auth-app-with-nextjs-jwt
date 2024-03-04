import { COOKIE_NAME } from "@/constant";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = cookies();
	const token = cookieStore.get(COOKIE_NAME);
	if (!token) {
		return new NextResponse("Unauthenticated", { status: 401 });
	}
	try {
		const secret = process.env.JWT_SECRET || "";
		const user = verify(token.value, secret);
		return NextResponse.json(user);
	} catch (e) {
		return new NextResponse("Something went wrong! Please try again.", { status: 400 });
	}
}
