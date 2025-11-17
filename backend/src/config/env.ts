import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? "4000";
const NODE_ENV = process.env.NODE_ENV ?? "development";
const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  console.warn(
    "[vendorhub-api] WARNING: MONGODB_URI is not set. Database connection will fail until configured."
  );
}

export const config = {
  env: NODE_ENV,
  port: Number(PORT),
  mongoUri: MONGODB_URI,
};
