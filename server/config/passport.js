import passport from "passport";
import LocalStrategy from "passport-local";

import User from "../models/user.js";
import { validPassword } from "../utils/passwordUtils.js";

const customFields = {
  firstNameField: "firstName",
  lastNameField: "lastName",
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = (email, password, done) => {
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
