import { useState, useContext } from "react";
import style from "./notesgroup.module.css";
import { NotesContext } from "../../contexts/notes.context";
const NotesGroup = () => {
  const { handleCreateNote } = useContext(NotesContext);
  return (
    <div className={style.notesGroupContainer}>
      <h2 className="heading">Pocket Notes</h2>
      <div>
        <div className={style.createBtnContainer}>
          <button
            className={style.createBtn}
            onClick={() => {
              handleCreateNote();
            }}
          >
            <span>+</span>
            <span>Create Notes group</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesGroup;
