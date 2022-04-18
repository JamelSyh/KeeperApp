import express from "express";
import cors from "cors";
import Note from "./models/note.js";
import noteRoutes from "./routes/notes.js";




const app = express();

app.use(express.json());
app.use(cors());
app.use("/notes", noteRoutes);

app.listen("5000", () => {
  console.log("listening on Port 5000");
});
