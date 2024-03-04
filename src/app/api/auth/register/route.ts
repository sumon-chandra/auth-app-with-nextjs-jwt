import User from "@/models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		await connectDB();
		const { email, password } = await req.json();
		// Check if user is already exist in database
		const isUserExist = await User.findOne({ email });
		if (isUserExist) {
			return new NextResponse("User already exists!!", { status: 409 });
		}
		// Hash password before saving in the database
		const hashedPassword = bcrypt.hashSync(password);
		// Create a new user
		const newUser = new User({ email, password: hashedPassword });
		await newUser.save();

		return NextResponse.json(newUser);
	} catch (error) {
		console.log("ERROR WHILE REGISTER", error);
		return new NextResponse("ERROR WHILE REGISTER", { status: 401 });
	}
}
