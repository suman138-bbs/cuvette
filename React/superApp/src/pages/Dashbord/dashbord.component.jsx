import React from "react";
import style from "./dashbord.module.css";
import Profile from "../../components/profile/profile.component";
import Weather from "../../components/weather/weather.component";
import News from "../../components/news/news.component";
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
        <News />
      </div>
      <div style={{ backgroundColor: "purple" }} className={style.fourth}>
        timer
      </div>
      <div className={style.fifth}>
        <Weather />
      </div>
    </div>
  );
};

export default Dashbord;
