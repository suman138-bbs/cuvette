import { createContext, useEffect, useState } from "react";
import { data } from "../utils/data";
export const CategoriesContext = createContext({
  categoriesList: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    setCategoriesList(data);
  }, []);
  const value = { categoriesList };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
