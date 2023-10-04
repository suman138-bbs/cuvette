import React, { useContext } from "react"; // Import useContext from React
import { CategoriesContext } from "../../context/categories.context";
import { selectedContext } from "../../context/selectedItem.context";
import style from "./category.module.css";
import Action from "../../assets/action.png";
import Romance from "../../assets/romance.png";
import Drama from "../../assets/drama.png";
import Fantasy from "../../assets/fantasy.png";
import Fiction from "../../assets/fiction.png";
import Horror from "../../assets/horror.png";
import Music from "../../assets/music.png";
import Thriller from "../../assets/thriller.png";
import Westren from "../../assets/western.png";
const Category = () => {
  const { categoriesList } = useContext(CategoriesContext);
  const { handleAdd } = useContext(selectedContext);
  console.log(categoriesList);
  const getBackGround = (category) => {
    switch (category) {
      case "Action":
        return { bgColor: "#FF5209", image: Action };
      case "Drama":
        return { bgColor: "#D7A4FF", image: Drama };
      case "Romance":
        return { bgColor: "#148A08", image: Romance };
      case "Thriller":
        return { bgColor: "#84C2FF", image: Thriller };
      case "Western":
        return { bgColor: "#902500", image: Westren };
      case "Horror":
        return { bgColor: "#7358FF", image: Horror };
      case "Fantasy":
        return { bgColor: "#FF4ADE", image: Fantasy };
      case "Music":
        return { bgColor: "#E61E32", image: Music };
      case "Fiction":
        return { bgColor: "#6CD061", image: Fiction };
      default:
        return "#fff";
    }
  };

  const handleSelect = (list) => {
    handleAdd(list);
  };
  return (
    <div>
      <div className={style.categoryContainer}>
        {categoriesList.map((category) => {
          return (
            <div
              key={category.id}
              style={{ backgroundColor: getBackGround(category.name).bgColor }}
              onClick={() => {
                handleSelect(category);
              }}
            >
              <div className={style.movieName}>
                <p>{category.name}</p>
                <div>
                  <img src={getBackGround(category.name).image} alt="" />
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
