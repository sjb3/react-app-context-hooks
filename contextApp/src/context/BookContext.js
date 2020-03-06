import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Empire Noir", id: 1 },
    { title: "Giselle", id: 2 },
    { title: "Million Kisses", id: 3 },
    { title: "Whatever", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};
