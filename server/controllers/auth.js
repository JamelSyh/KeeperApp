import express from "express";
import User from "../models/user.js";
import { genPassword } from "../utils/passwordUtils.js";

export const login = (req, res) => {
  res.send("hi");
};

export const getLogin = (req, res) => {
  if (req.isAuthenticated()) {
    res.send("cool");
  } else {
    res.send("not cool");
  }
};

export const register = (req, res) => {
  console.log(req.body);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hash: genPassword(req.body.password).hash,
    salt: genPassword(req.body.password).salt,
  });
  user.save();
  res.json(user);
};
export const logout = (req, res) => {};
