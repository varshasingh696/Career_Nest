import dotenv from "dotenv";
import cloudinary from "cloudinary";
import app from "./app.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config();
dotenv.config({ path: "./config/config.env" });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const port = Number(process.env.PORT) || 5000;

const startServer = async () => {
  await dbConnection();
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
};

startServer();