import React from "react";
import "./StarWars.css";

const StarWarsCharList = ({ starwarsChars }) => (
  <div className="starwars-charlist">
    {starwarsChars.map(char => (
      <StarWarsChar key={char.created} char={char} />
    ))}
  </div>
);
