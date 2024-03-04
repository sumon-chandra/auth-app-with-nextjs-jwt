import jwt from "jsonwebtoken";
import User from "@/models/User";
import { serialize } from "cookie";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { COOKIE_NAME, MAX_AGE } from "@/constant";

export async function POST(request: Request) {
	try {
		const { email, password } = await request.json();
		const user = await User.findOne({ email });
		if (!user || !user.password) {
			throw new Error("Invalid credentials!!");
		}
		const isPasswordCorrect = bcrypt.compareSync(password, user.password);
		if (!isPasswordCorrect) {
			throw new Error("Invalid credentials!!");
		}
		// Generate JWT token
		const secret = process.env.JWT_SECRET || "";
		const token = jwt.sign({ email }, secret, { expiresIn: MAX_AGE });
		const serialized = serialize(COOKIE_NAME, token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: MAX_AGE,
			path: "/",
		});
		return new Response(JSON.stringify({ message: "Authenticated" }), {
			status: 200,
			headers: { "Set-Cookie": serialized },
		});
	} catch (error: any) {
		console.log("FAILED LOGIN", error);
		return new NextResponse("FAILED LOGIN", { status: 409 });
	}
}
