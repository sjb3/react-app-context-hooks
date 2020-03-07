import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const BookContext = createContext(); // just invoke it here

export const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "1981", author: "George Orwell", id: 1 },
    { title: "Empire Noir", author: "David Dawson", id: 2 },
    { title: "No Label", author: "Naomi Klein", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
