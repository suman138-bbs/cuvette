import React from "react";
import style from "./categories.module.css";
import Category from "../../components/category/category.component";
import { useContext } from "react";
import { selectedContext } from "../../context/selectedItem.context";
const Categories = () => {
  const { selectedItem } = useContext(selectedContext);

  return (
    <div className={style.categoriesContainer}>
      <div className={style.selectedCate}>
        <div>
          <div>
            <div>
              <h1 className={style.heading}>Super app</h1>
            </div>
            <div>
              <p className={style.headline}>
                Choose your entertainment category
              </p>
            </div>
          </div>
          <div style={{ color: "white" }}>"list"</div>
          <div style={{ color: "white" }}>"error"</div>
        </div>
      </div>
      <div className={style.categoryList}>
        <Category />
      </div>
    </div>
  );
};

export default Categories;
