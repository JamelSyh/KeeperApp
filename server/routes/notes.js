import express from "express";

import * as note from "../controllers/notes.js";

const router = express.Router();

router.get("/", note.getNotes);

router.post("/new", note.postNotes);

router.delete("/delete/:id", note.deleteNote);

router.patch("/complete/:id", note.completeNote);

export default router;
