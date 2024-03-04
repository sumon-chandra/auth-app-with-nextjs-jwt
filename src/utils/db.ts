import mongoose from "mongoose";

export async function connectDB() {
	try {
		await mongoose.connect("mongodb+srv://sumon-chandra-next-auth:QQ2Mk29I3AjqsjCW@cluster0.lh1oos6.mongodb.net/NextAuthDB");
		console.log("Connected to MongoDB");
	} catch (error: any) {
		console.error("Error connecting to MongoDB: " + error.message);
	}
}
