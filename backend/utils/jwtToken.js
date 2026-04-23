export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE_DAYS || 5);
  const isProduction = process.env.NODE_ENV === "production";

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    })
    .json({
      success: true,
      user,
      message,
      token,
    });
};