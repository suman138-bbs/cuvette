import style from "./notesgroup.module.css";
const NotesGroup = () => {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  return (
    <div className={style.notesGroupContainer}>
      <h1 className="heading">Pocket Notes</h1>
    </div>
  );
};

export default NotesGroup;
