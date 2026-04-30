// import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
// import { User } from "../models/userSchema.js";
// import ErrorHandler from "../middlewares/error.js";
// import { sendToken } from "../utils/jwtToken.js";

// export const register = catchAsyncErrors(async (req, res, next) => {
//   const { name, email, phone, password, role } = req.body;

//   if (!name || !email || !phone || !password || !role) {
//     return next(new ErrorHandler("Please fill all required fields.", 400));
//   }

//   const isEmail = await User.findOne({ email: email.toLowerCase() });
//   if (isEmail) {
//     return next(new ErrorHandler("Email already registered.", 409));
//   }

//   const user = await User.create({
//     name,
//     email: email.toLowerCase(),
//     phone,
//     password,
//     role,
//   });

//   sendToken(user, 201, res, "User registered successfully.");
// });

// export const login = catchAsyncErrors(async (req, res, next) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return next(new ErrorHandler("Please provide email, password and role.", 400));
//   }

//   const user = await User.findOne({ email: email.toLowerCase() }).select(
//     "+password"
//   );

//   if (!user) {
//     return next(new ErrorHandler("Invalid email or password.", 400));
//   }

//   const isPasswordMatched = await user.comparePassword(password);
//   if (!isPasswordMatched) {
//     return next(new ErrorHandler("Invalid email or password.", 400));
//   }

//   if (user.role !== role) {
//     return next(new ErrorHandler(`No ${role} account found with this email.`, 404));
//   }

//   sendToken(user, 200, res, "User logged in successfully.");
// });

// export const logout = catchAsyncErrors(async (req, res, next) => {
//   const isProduction = process.env.NODE_ENV === "production";

//   res
//     .status(200)
//     .cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//       sameSite: isProduction ? "none" : "lax",
//       secure: isProduction,
//     })
//     .json({
//       success: true,
//       message: "Logged out successfully.",
//     });
// });


// export const getUser = catchAsyncErrors((req, res, next) => {
//   const user = req.user;
//   res.status(200).json({
//     success: true,
//     user,
//   });
// });


import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role = "Job Seeker" } = req.body;

  // phone optional kar diya
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill all required fields.", 400));
  }

  const isEmail = await User.findOne({ email: email.toLowerCase() });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered.", 409));
  }

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone, // ho to save hoga, na ho to undefined
    password,
    role,
  });

  sendToken(user, 201, res, "User registered successfully.");
});


export const login = catchAsyncErrors(async (req, res, next) => {
  // role default kar diya
  const { email, password, role = "Job Seeker" } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password.", 400));
  }

  const user = await User.findOne({
    email: email.toLowerCase()
  }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  // role mismatch check abhi disable kar diya troubleshooting ke liye
  /*
  if (user.role !== role) {
    return next(new ErrorHandler(`No ${role} account found with this email.`,404));
  }
  */

  sendToken(user, 200, res, "User logged in successfully.");
});


export const logout = catchAsyncErrors(async (req, res, next) => {
  const isProduction = process.env.NODE_ENV === "production";

  res
    .status(200)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    })
    .json({
      success: true,
      message: "Logged out successfully.",
    });
});


export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    user,
  });
});