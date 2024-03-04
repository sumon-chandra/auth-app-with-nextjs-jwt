import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		await connectDB();
		const { email, password } = await req.json();

		const isUserExist = await User.findOne({ email });
		console.log({ isUserExist });

		if (isUserExist) {
			return new NextResponse("User already exists!!", { status: 409 });
		}
		// Hash password before saving in the database
		const hashedPassword = hashPassword(password);
		// Create a new user
		const newUser = new User({ email, password: hashedPassword });
		await newUser.save();
		console.log({ newUser });

		return NextResponse.json(newUser);
	} catch (error) {
		console.log("ERROR WHILE REGISTER", error);
		return new NextResponse("ERROR WHILE REGISTER", { status: 401 });
	}
}
