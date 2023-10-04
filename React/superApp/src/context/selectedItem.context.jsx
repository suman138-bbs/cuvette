import { createContext, useState } from "react";

const addItem = (selectedItem, ItemTOAdd) => {
  const exist = selectedItem.find((ele) => {
    return ele.id === ItemTOAdd.id;
  });

  console.log("Selected Item", selectedItem);
  console.log("Item to add", ItemTOAdd);
  console.log("Exsist", exist);
  if (!exist) {
    return [...selectedItem, ItemTOAdd];
  } else {
    return [...selectedItem];
  }
};

export const selectedContext = createContext({
  selectedItem: [],
});

export const SelectedProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const handleAdd = (item) => {
    setSelectedItem(addItem(selectedItem, item));
  };
  const value = { selectedItem, handleAdd };

  return (
    <selectedContext.Provider value={value}>
      {children}
    </selectedContext.Provider>
  );
};
