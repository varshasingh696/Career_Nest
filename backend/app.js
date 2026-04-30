// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
// import userRouter from "./routes/userRouter.js";
// import jobRouter from "./routes/jobRouter.js";
// import applicationRouter from "./routes/applicationRouter.js";
// import { errorMiddleware } from "./middlewares/error.js";

// const app = express();

// const corsOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173")
//   .split(",")
//   .map((origin) => origin.trim())
//   .filter(Boolean);

// app.use(
//   cors({
//     origin: corsOrigins,
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json({ limit: "1mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "./tmp",
//     limits: { fileSize: 5 * 1024 * 1024 },
//     abortOnLimit: true,
//   })
// );

// app.get("/api/v1/health", (req, res) => {
//   res.status(200).json({ success: true, message: "API is healthy" });
// });

// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/application", applicationRouter);
// app.use("/api/v1/job", jobRouter);

// app.use(errorMiddleware);

// export default app;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

// CORS setup (multiple origins support)
const corsOrigins = (process.env.FRONTEND_URLS || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman / mobile apps)
      if (!origin) return callback(null, true);

      if (corsOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Middlewares
app.use(cookieParser());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// File upload config
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp",
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    abortOnLimit: true,
  })
);

// Root route (important for Render)
app.get("/", (req, res) => {
  res.send(" Backend is running successfully");
});

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);

// Handle unknown routes
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Error middleware (last)
app.use(errorMiddleware);

export default app;