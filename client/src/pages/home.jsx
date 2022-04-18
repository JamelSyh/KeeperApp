import React, { useState, useEffect } from "react";

import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import Footer from "../components/Footer";
import * as api from "../api/index";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const response = await api.fetchNotes();
      setNotes(response.data);
    };
    getNotes();
  }, []);

  const addNote = async (newNote) => {
    const response = await api.postNote(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, response.data];
    });
  };

  const removeNote = async (id) => {
    const response = await api.deleteNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem._id !== response.data._id;
      });
    });
  };

  const updateNote = async (id) => {
    const response = await api.patchNote(id);
    setNotes((prevNotes) => {
      return prevNotes.map((item) => {
        if (item._id === response.data._id) {
          item.complete = response.data.complete;
        }
        return item;
      });
    });
  };

  return (
    <>
      <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              sty
              key={index}
              note={noteItem}
              onDelete={removeNote}
              onComplete={updateNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
