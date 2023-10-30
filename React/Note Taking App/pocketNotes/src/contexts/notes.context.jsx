import { createContext, useState } from "react";

export const NotesContext = createContext({
  createGroup: false,
  handleCreateGroup: () => {},
  handleNoteName: () => {},
});

export const NotesProvider = ({ children }) => {
  const [createGroup, setCreateGroup] = useState(false);

  const handleCreateGroup = () => {
    setCreateGroup(!createGroup);
  };
  const handleNoteName = (name) => {
    console.log(name);
  };
  const value = { createGroup, handleCreateGroup, handleNoteName };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
