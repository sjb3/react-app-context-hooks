import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li className="single-book-list" onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author"> by {book.author}</div>
    </li>
  );
};
