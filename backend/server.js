import dotenv from "dotenv";
import cloudinary from "cloudinary";
import app from "./app.js";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// MongoDB connection
const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Error:", error.message);
    process.exit(1);
  }
};

const port = process.env.PORT || 5000;

// Add root route (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send(" Backend is running successfully");
});

//  Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });

  } catch (error) {
    console.error(" Server start error:", error);
  }
};

startServer();