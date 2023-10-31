import style from "./notes.module.css";
import { useContext } from "react";
import { NotesContext } from "../../contexts/notes.context";
const Notes = () => {
  const { selectedIcon } = useContext(NotesContext);
  const { name, color, noteIcon } = selectedIcon;
  console.log(selectedIcon);
  return (
    <div className={style.notesContainer}>
      <div className={style.NoteIcon}>
        {
          <>
            <h3 style={{ backgroundColor: color }}>
              <span>{noteIcon}</span>
            </h3>
            <h4>{name}</h4>
          </>
        }
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Notes;
