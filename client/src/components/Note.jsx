import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.note._id);
  }

  const handeleCompleteClick = () => {
    props.onComplete(props.note._id);
  };

  return (
    <div className="note">
      <h1
        onClick={handeleCompleteClick}
        // style={{
        //   textDecoration: props.noteItem.complete ? "line-through" : "",
        // }}
      >
        {props.note.title}
      </h1>
      <p>{props.note.content}</p>
      <button style={{ backgroundColor: "white" }} onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
