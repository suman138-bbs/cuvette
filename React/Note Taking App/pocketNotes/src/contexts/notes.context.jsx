import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext({
  createNote: false,
  handleCreateNote: () => {},
  handleNoteName: () => {},
});

export const NotesProvider = ({ children }) => {
  const [createNote, setCreateNote] = useState(false);
  const [NotesNameList, setNotesNameList] = useState([]);

  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState({});

  useEffect(() => {
    const storedNotesNameList = JSON.parse(
      localStorage.getItem("NotesNameList")
    );
    if (storedNotesNameList) {
      setNotesNameList(storedNotesNameList);
    }
    setInitialDataLoaded(true);
  }, []);

  const handleCreateNote = () => {
    setCreateNote(!createNote);
  };

  const handleNoteName = ({ name, color }) => {
    let id = NotesNameList.length + 1;
    const noteIcon = name[0] + name[Math.floor(Math.random() * name.length)];
    const newNote = { id, name, color, noteIcon };

    setNotesNameList([...NotesNameList, newNote]);
  };

  useEffect(() => {
    if (initialDataLoaded) {
      localStorage.setItem("NotesNameList", JSON.stringify(NotesNameList));
    }
  }, [NotesNameList, initialDataLoaded]);

  const value = {
    createNote,
    handleCreateNote,
    handleNoteName,
    NotesNameList,
    setSelectedIcon,
    selectedIcon,
  };

  console.log(selectedIcon);
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
