import express from "express";
import passport from "passport";
import * as auth from "../controllers/auth.js";

const router = express.Router();

router.post("/login", passport.authenticate("local"), auth.login);
router.get("/logout", auth.logout);
router.post("/register", auth.register);
router.get("/login", auth.getLogin);

export default router;
