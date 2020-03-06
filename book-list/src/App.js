import React from "react";
import { BookContextProvider } from "./context/BookContext";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
      </BookContextProvider>
    </div>
  );
}

export default App;
