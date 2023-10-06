import React from "react";
import style from "./dashbord.module.css";
const Dashbord = () => {
  return (
    <div className={style.dashbordContainer}>
      <div style={{ backgroundColor: "red" }} className={style.first}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
        possimus, fugit rem dolor adipisci amet quibusdam numquam maxime vero
        distinctio reiciendis modi ipsam voluptate, excepturi molestiae
        molestias autem inventore nisi tempore recusandae? Illum id mollitia
        qui, commodi molestiae impedit minus soluta dolores, enim aliquid beatae
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
