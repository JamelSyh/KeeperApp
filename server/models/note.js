import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(console.logerror);

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
