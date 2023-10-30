import { useState, useContext } from "react";
import style from "./groupInput.module.css";
import { NotesContext } from "../../contexts/notes.context";
const GroupInput = () => {
  const [notesColor, setNotesColor] = useState("");
  const [notesName, setNotesName] = useState("");
  const { handleNoteName } = useContext(NotesContext);

  return (
    <>
      <div className={style.groupInputContainer}>
        <h3>Create New Notes group</h3>
        <div>
          <div className={style.inputContainer}>
            <h3>Group Name</h3>{" "}
            <input
              type="text"
              placeholder="Enter your group name...."
              onChange={(e) => {
                setNotesName(e.target.value);
              }}
            />
          </div>
          <div className={style.colorContainer}>
            <div>
              <h3>Choose colour</h3>
            </div>
            <div className={style.coloBtnContainer}>
              <button
                className={style.choseColor1}
                onClick={() => {
                  setNotesColor("#B38BFA");
                }}
              ></button>
              <button
                className={style.choseColor2}
                onClick={() => {
                  setNotesColor("#FF79F2");
                }}
              ></button>
              <button
                className={style.choseColor3}
                onClick={() => {
                  setNotesColor("#43E6FC");
                }}
              ></button>
              <button
                className={style.choseColor4}
                onClick={() => {
                  setNotesColor("#F19576");
                }}
              ></button>
              <button
                className={style.choseColor5}
                onClick={() => {
                  setNotesColor("#0047FF");
                }}
              ></button>
              <button
                className={style.choseColor6}
                onClick={() => {
                  setNotesColor("#6691FF");
                }}
              ></button>
            </div>
          </div>
        </div>
        <div className={style.createBtn}>
          <button
            onClick={() => {
              handleNoteName({ name: notesName, color: notesColor });
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default GroupInput;
