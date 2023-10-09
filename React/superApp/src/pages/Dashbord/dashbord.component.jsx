import React from "react";
import style from "./dashbord.module.css";
import Profile from "../../components/profile/profile.component";
const Dashbord = () => {
  return (
    <div className={style.dashbordContainer}>
      <div className={style.first}>
        <Profile />
      </div>
      <div style={{ backgroundColor: "gray" }} className={style.second}>
        notes
      </div>
      <div style={{ backgroundColor: "blue" }} className={style.third}>
        news
      </div>
      <div style={{ backgroundColor: "purple" }} className={style.fourth}>
        timer
      </div>
      <div style={{ backgroundColor: "orange" }} className={style.fifth}>
        weather
      </div>
    </div>
  );
};

export default Dashbord;
