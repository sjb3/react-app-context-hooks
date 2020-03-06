import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const BookList = () => {
  const { books } = useContext(BookContext);
  return <div></div>;
};
