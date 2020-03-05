import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const NewSongForm = ({ handleAddTitle }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    handleAddTitle(title);
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title of the show</Form.Label>
        <Form.Control
          onChange={e => setTitle(e.target.value)}
          value={title}
          type="text"
          required
          placeholder="Enter here..."
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
