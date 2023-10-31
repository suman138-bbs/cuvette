import { useState, useContext } from "react";
import style from "./notesgroup.module.css";
import { NotesContext } from "../../contexts/notes.context";
const NotesGroup = () => {
  const { handleCreateNote, NotesNameList, setSelectedIcon } =
    useContext(NotesContext);
  const handleNoteIcon = (val) => {
    setSelectedIcon(val);
  };
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
        <div className={style.NoteIconNameContainer}>
          {NotesNameList.map(({ name, color, noteIcon }) => {
            return (
              <div
                className={style.NoteIconName}
                key={name}
                onClick={() => {
                  handleNoteIcon({ name, color, noteIcon });
                }}
              >
                <h3 style={{ backgroundColor: color }}>
                  <span>{noteIcon}</span>
                </h3>
                <h5>{name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotesGroup;
