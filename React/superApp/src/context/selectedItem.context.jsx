import { createContext, useState } from "react";

export const selectedContext = createContext({
  selectedItem: [],
});

export const SelectedProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const value = { selectedItem };
  console.log(value);
  return (
    <selectedContext.Provider value={value}>
      {children}
    </selectedContext.Provider>
  );
};
