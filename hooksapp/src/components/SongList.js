import React, { useState } from "react";
import uuid from "react-uuid";

// import uuid from "uuid";
// import uuidv1 from "uuid/v1";
// const uuidv1 = require("uuid/v1");

export const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Empire Noir", id: 1 },
    { title: "Giselle", id: 2 },
    { title: "Million Kisses", id: 3 },
    { title: "Whatever", id: 4 }
  ]);

  const handleAddTitle = () => {
    setSongs([...songs, { title: "new Dance", id: uuid() }]);
  };

  return (
    <div className="song-list">
      {songs.map(song => (
        <ul key={song.id}>
          <li>{song.title}</li>
        </ul>
      ))}
      <button onClick={handleAddTitle}>+</button>
    </div>
  );
};
