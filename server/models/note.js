import mongoose from "mongoose";
import dotenv from "dotenv";

const schema = mongoose.Schema;

const noteSchema = new schema({
  title: String,
  content: String,
  complete: {
    type: String,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date(),
  },
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
