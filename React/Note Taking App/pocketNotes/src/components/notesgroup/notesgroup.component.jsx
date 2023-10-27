import style from "./notesgroup.module.css";
const NotesGroup = () => {
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  const handleCreateGroup = () => {};
  return (
    <div className={style.notesGroupContainer}>
      <h2 className="heading">Pocket Notes</h2>
      <div>
        <div className={style.createBtnContainer}>
          <button
            className={style.createBtn}
            onClick={() => {
              handleCreateGroup();
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
