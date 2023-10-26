import { useEffect, useState } from "react";
import NotesGroup from "../../components/notesgroup/notesgroup.component";
import Notes from "../../components/notes/notes.component";
import style from "./Hero.module.css";
const Hero = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Resizing");
      if (window.innerWidth <= 600) {
        console.log("Reached Mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={style.HeroContainer}>
      <div className={style.NotesGroup}>
        <NotesGroup />
      </div>
      <div className={style.Notes}>
        <Notes />
      </div>
    </div>
  );
};

export default Hero;
