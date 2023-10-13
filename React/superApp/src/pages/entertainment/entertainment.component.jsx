import { useState, useEffect } from "react";
import style from "./entertainment.module.css";
import Rounded from "../../assets/Rounded.png";
import { Link } from "react-router-dom";
const Entertainment = () => {
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    setSelectedItem(JSON.parse(localStorage.getItem("selectedItem")));
    const getData = async () => {
      const url =
        "https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "4e57850dc2msh190ba06551ed657p1b4d91jsn8901d1ca67d8",
          "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={style.entertainContainer}>
      <div className={style.headerContainer}>
        <p>Super app</p>
        <div>
          <Link to="/dashbord">
            {" "}
            <img src={Rounded} alt="" srcset="" />
          </Link>
        </div>
      </div>
      <div className={style.heroConatiner}>
        <p>Entertainment according to your choice</p>
      </div>
    </div>
  );
};

export default Entertainment;
