import axios from "axios";

const url = "http://localhost:5000/notes";

export const fetchNotes = async () => await axios.get(url);
export const postNote = async (data) => await axios.post(url + "/new", data);
export const deleteNote = async (id) =>
  await axios.delete(url + "/delete/" + id);
export const patchNote = async (id, data) =>
  await axios.patch(url + "/complete/" + id, data);
