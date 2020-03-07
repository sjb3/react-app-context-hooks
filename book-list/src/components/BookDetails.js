import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      className="single-book-list"
      onClick={() =>
        dispatch({
          type: "REMOVE_BOOK",
          id: book.id
        })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author"> by {book.author}</div>
    </li>
  );
};
