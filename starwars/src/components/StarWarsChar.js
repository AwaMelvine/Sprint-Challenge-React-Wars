import React from "react";
import "./StarWars.css";

const StarWarsChar = ({ char }) => (
  <div className="starwar-char">{char.name}</div>
);

export default StarWarsChar;
