import express from "express";
// // All required import
// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// // const GithubStrategy = require("passport-github2").Strategy;
// // const FacebookStrategy = require("passport-facebook").Strategy;

// // GoogleStrategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       callbackURL: "/auth/google/callback",
//     },
//     function (profile: any, done: any) {
//       done(null, profile);
//     }
//   )
// );

// // GithubStrategy
// // passport.use(
// //   new GithubStrategy(
// //     {
// //       clientID: GITHUB_CLIENT_ID,
// //       clientSecret: GITHUB_CLIENT_SECRET,
// //       callbackURL: "/auth/github/callback",
// //     },
// //     function (accessToken, refreshToken, profile, done) {
// //       done(null, profile);
// //     }
// //   )
// // );

// // FacebookStrategy
// // passport.use(
// //   new FacebookStrategy(
// //     {
// //       clientID: FACEBOOK_APP_ID,
// //       clientSecret: FACEBOOK_APP_SECRET,
// //       callbackURL: "/auth/facebook/callback",
// //     },
// //     function (accessToken, refreshToken, profile, done) {
// //       done(null, profile);
// //     }
// //   )
// // );

// // serializeUser & deserializeUser for session
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user!);
// });
// export default passport;

// All required import
import asyncHandler from "express-async-handler";

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User";
import { CreateSignToken } from "./Token";
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
export const pasrt = () => {
  // GoogleStrategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: `${process.env.BASE_URL}/api/v1/passports/google/callback`,
      },
      // Server Side: save at database
      // Server Side: res token & data
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if the user already exists in the database
          let user = await User.findOne({ email: profile.emails![0].value });

          if (!user) {
            // If user doesn't exist, create a new user with relevant fields
            const nameParts = profile.displayName.split(" ");
            user = await User.create({
              name: nameParts![0], // First part as name
              lastname: nameParts[1] || "", // Second part as lastname
              email: profile.emails![0].value,
              profileImg: profile.photos![0].value, // Store profile image URL
              // You may want to handle other fields based on your application needs
            });
          }
          const token = CreateSignToken(user._id, user.role);
          // Return the user to the next middleware

          return done(null, { token, user });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  // GithubStrategy
  // passport.use(
  //   new GithubStrategy(
  //     {
  //       clientID: GITHUB_CLIENT_ID,
  //       clientSecret: GITHUB_CLIENT_SECRET,
  //       callbackURL: "/auth/github/callback",
  //     },
  //     function (accessToken, refreshToken, profile, done) {
  //       done(null, profile);
  //     }
  //   )
  // );

  // FacebookStrategy
  // passport.use(
  //   new FacebookStrategy(
  //     {
  //       clientID: FACEBOOK_APP_ID,
  //       clientSecret: FACEBOOK_APP_SECRET,
  //       callbackURL: "/auth/facebook/callback",
  //     },
  //     function (accessToken, refreshToken, profile, done) {
  //       done(null, profile);
  //     }
  //   )
  // );

  // serializeUser & deserializeUser for session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user!);
  });
};
