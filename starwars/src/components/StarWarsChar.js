import React from "react";
import "./StarWars.css";
import StarWarsCharDetails from "./StarWarsCharDetails";

const StarWarsChar = ({ char, expandDetails }) => (
  <div className="starwar-char" onClick={() => expandDetails(char)}>
    {char.name}
    <StarWarsCharDetails char={char} />
  </div>
);

export default StarWarsChar;
