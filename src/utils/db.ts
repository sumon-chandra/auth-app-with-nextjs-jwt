import mongoose from "mongoose";

export async function connectDB() {
	try {
		await mongoose.connect(process.env.DATABASE_URL!);
		console.log({ databaseStatus: "Connected to MongoDB" });
	} catch (error: any) {
		console.error("Error connecting to MongoDB: " + error.message);
	}
}
