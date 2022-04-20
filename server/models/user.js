import mongoose from "mongoose";

const Schema = mongoose.Schema;

const noteSchema = new Schema({
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

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  hash: String,
  salt: String,
  notes: [noteSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
