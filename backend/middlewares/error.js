class ErrorHandler extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  let error = err;
  error.message = error.message || "Internal Server Error";
  error.statusCode = error.statusCode || 500;

  if (error.name === "CastError") {
    error = new ErrorHandler(`Resource not found. Invalid ${error.path}`, 400);
  }

  if (error.code === 11000) {
    error = new ErrorHandler(
      `Duplicate value entered for ${Object.keys(error.keyValue).join(", ")}`,
      400
    );
  }

  if (error.name === "JsonWebTokenError") {
    error = new ErrorHandler("Invalid token. Please login again.", 401);
  }

  if (error.name === "TokenExpiredError") {
    error = new ErrorHandler("Session expired. Please login again.", 401);
  }

  if (error.name === "ValidationError") {
    const message = Object.values(error.errors)
      .map((value) => value.message)
      .join(", ");
    error = new ErrorHandler(message, 400);
  }

  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};

export default ErrorHandler;