// src/db/mongo.ts
import mongoose from "mongoose";
import { config } from "../config/env";

export async function connectToDatabase() {
	if (!config.mongoUri) {
		throw new Error("MONGODB_URI is not set in environment variables.");
	}

	// 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
	if (mongoose.connection.readyState === 1) {
		console.log("[vendorhub-api] MongoDB already connected.");
		return;
	}

	try {
		await mongoose.connect(config.mongoUri);
		console.log("[vendorhub-api] Connected to MongoDB.");
	} catch (err) {
		console.error("[vendorhub-api] MongoDB connection error:", err);
		throw err;
	}
}
