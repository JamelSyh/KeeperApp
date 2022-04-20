import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

dotenv.config();

import routes from "./routes/index.js";
import Note from "./models/note.js";
import noteRoutes from "./routes/notes.js";
import authRoutes from "./routes/auth.js";
import "./config/passport.js";

const DATABASE_URL = process.env.DATABASE_URL;
const secret = process.env.SECRET;

export default mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(console.logerror);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
    saveUninitialized: true,
  })
);

const mstore = MongoStore.create({
  mongoUrl: DATABASE_URL,
  dbName: "session",
});

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    store: mstore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 5,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(routes);

app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.listen("5000", () => {
  console.log("listening on Port 5000");
});
