// All required import
import express from "express";
// loginSuccessOfThirtyParty
export const loginSuccessOfThirtyParty = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.user)
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "success",
      user: req.user, // Should contain the profile
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "No user authenticated",
    });
  }
};
// loginFailureOfThirtyParty
export const loginFailureOfThirtyParty = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};
// logoutThirtyParty
export const logoutThirtyParty = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  //   req.logout();
  res.redirect(process.env.BASE_URL_FRONT!);
};
