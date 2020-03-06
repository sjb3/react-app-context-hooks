import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Nav Bar</h1>
      <p>Currently I have {books.length} books</p>
    </div>
  );
};
