// import dotenv from "dotenv";
// import cloudinary from "cloudinary";
// import app from "./app.js";
// import { dbConnection } from "./database/dbConnection.js";

// dotenv.config();
// dotenv.config({ path: "./config/config.env" });

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// const port = Number(process.env.PORT) || 5000;

// const startServer = async () => {
//   await dbConnection();
//   app.listen(port, () => {
//     console.log(`Server is running at ${port}`);
//   });
// };

// startServer();




// import dotenv from "dotenv";
// import cloudinary from "cloudinary";
// import app from "./app.js";
// import { dbConnection } from "./database/dbConnection.js";

// // Load env only once
// dotenv.config();

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });

// const port = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await dbConnection();

//     app.listen(port, () => {
//       console.log(`Server is running at ${port}`);
//     });

//   } catch (error) {
//     console.error("Startup Error:", error);
//     process.exit(1);
//   }
// };

// startServer();




import dotenv from "dotenv";
import cloudinary from "cloudinary";
import app from "./app.js";
import mongoose from "mongoose";

// ✅ Load env file (IMPORTANT)
// dotenv.config({ path: "./config.env" });
dotenv.config();
// ✅ Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// ✅ MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Error:", error.message);
    process.exit(1);
  }
};

const port = process.env.PORT || 5000;

// ✅ Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });

  } catch (error) {
    console.error("❌ Server start error:", error);
  }
};

startServer();