import Note from "../models/note.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

export const postNotes = (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  note.save();
  res.json(note);
};

export const deleteNote = async (req, res) => {
  const result = await Note.findByIdAndDelete(req.params.id);
  res.json(result);
};

export const completeNote = async (req, res) => {
  const note = await Note.findOneAndUpdate({ _id: req.params.id }, [
    { $set: { complete: { $not: "$complete" } } },
  ]);

  res.json(note);
};
