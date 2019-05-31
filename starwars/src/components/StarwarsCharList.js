import React from "react";
import "./StarWars.css";
import StarWarsChar from "./StarWarsChar";

const StarWarsCharList = ({ starwarsChars }) => (
  <div className="starwars-charlist">
    {starwarsChars.map(char => (
      <StarWarsChar key={char.created} char={char} />
    ))}
  </div>
);

export default StarWarsCharList;
