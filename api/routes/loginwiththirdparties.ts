// All required import
import express, { NextFunction, Request, Response } from "express";
import {
  loginFailureOfThirtyParty,
  loginSuccessOfThirtyParty,
  logoutThirtyParty,
} from "../controllers/loginwiththirdparties";
import passport from "passport";
// HTTP method and Endpoint and Permissions
const passportRoute: express.Router = express.Router();
passportRoute.route("/login/success").get(loginSuccessOfThirtyParty);
passportRoute.route("/login/failed").get(loginFailureOfThirtyParty);
passportRoute.route("/logout").get(logoutThirtyParty);

passportRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// passportRoute.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: process.env.BASE_URL_FRONT,
//     failureRedirect: "/api/v1/passports/login/failed",
//   })
// );

// passportRoute.get(
//   "/google/callback",
//   passport.authenticate(
//     "google",
//     {
//       successRedirect: process.env.BASE_URL_FRONT,
//       failureRedirect: "/api/v1/passports/login/failed",
//     },
//     (err, data, info) => {
//       (req: Request, res: Response, next: NextFunction) => {
//         const { profile } = data;
//         res.status(200).json({
//           success: true,
//           message: "success",
//           user: profile,
//         });
//         next();
//       };
//     }
//   )
// );

passportRoute.get(
  "/google/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("google", (err: any, profile: any, info: any) => {
      if (err) {
        return res.redirect("/api/v1/passports/login/failed");
      }

      if (!profile) {
        return res.redirect("/api/v1/passports/login/failed");
      }
      const { token, user } = profile;

     // req.userOfThirdParty = token;      
      req.user = token;
      console.log(req.user);
      // console.log(req.userOfThirdParty);
      
      return res.redirect(process.env.BASE_URL_FRONT!);

    })(req, res, next); // Pass req, res, and next to the middleware
  }
);

export default passportRoute;
// ! For front
