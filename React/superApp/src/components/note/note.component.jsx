import style from "./note.module.css";

const Note = () => {
  return (
    <div className={style.noteContainer}>
      <h2>All notes</h2>
      <div className={style.inputContainer}>
        <input type="text" />
      </div>
    </div>
  );
};

export default Note;
