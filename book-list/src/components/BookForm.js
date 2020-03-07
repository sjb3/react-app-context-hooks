import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Form, Button } from "react-bootstrap";

export const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <Form className="add-form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Book Titile</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author(s)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Author(s)"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" value="add book">
        Submit
      </Button>
    </Form>
  );
};
