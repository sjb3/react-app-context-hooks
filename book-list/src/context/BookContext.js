import React, { createContext, useState, useEffect, useReducer } from "react";
import uuid from "react-uuid";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext(); // just invoke it here

export const BookContextProvider = props => {
  // const [books, setBooks] = useState([
  //   { title: "1981", author: "George Orwell", id: 1 },
  //   { title: "Empire Noir", author: "David Dawson", id: 2 },
  //   { title: "No Label", author: "Naomi Klein", id: 3 }
  // ]);

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    // by using below, you can pull the data from localStorage
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
