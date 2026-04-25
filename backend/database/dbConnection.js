import mongoose from "mongoose";


export const dbConnection = async () => {
  const mongoUri = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB_NAME || "jobquest";

  if (!mongoUri) {
    throw new Error("MONGO_URI is required");
  }

  await mongoose.connect(mongoUri, {
    dbName,
    serverSelectionTimeoutMS: 30000,
    // Helps avoid provider TLS chain/handshake edge cases in hosted envs.
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true,
  });
  console.log("Database connected successfully");
};