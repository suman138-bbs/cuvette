import React, { useContext } from "react"; // Import useContext from React
import { CategoriesContext } from "../../context/categories.context";
import style from "./category.module.css";
import Action from "../../assets/action.png";
const Category = () => {
  const { categoriesList } = useContext(CategoriesContext);
  console.log(categoriesList);
  const getBackGround = (category) => {
    switch (category) {
      case "Action":
        return "#FF5209";
      case "Drama":
        return "#D7A4FF";
      case "Romance":
        return "#148A08";
      case "Thriller":
        return "#84C2FF";
      case "Western":
        return "#902500";
      case "Horror":
        return "#7358FF";
      case "Fantasy":
        return "#FF4ADE";
      case "Music":
        return "#E61E32";
      case "Fiction":
        return "#6CD061";
      default:
        return "#fff";
    }
  };
  return (
    <div>
      <div className={style.categoryContainer}>
        {categoriesList.map((category) => {
          return (
            <div
              key={category.id}
              style={{ backgroundColor: getBackGround(category.name) }}
            >
              <div className={style.movieName}>
                <p>{category.name}</p>
                <div>
                  <img src={Action} alt="" srcset="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
