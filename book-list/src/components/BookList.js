import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookDetails } from "./BookDetails";

export const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">"Currently bookshelves are empty"</div>
  );
};
