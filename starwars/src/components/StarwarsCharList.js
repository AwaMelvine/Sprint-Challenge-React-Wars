import React from "react";
import "./StarWars.css";
import StarWarsChar from "./StarWarsChar";

const StarWarsCharList = ({ starwarsChars, expandDetails }) => (
  <div className="starwars-charlist">
    {starwarsChars.map(char => (
      <StarWarsChar
        key={char.created}
        char={char}
        expandDetails={expandDetails}
      />
    ))}
  </div>
);

export default StarWarsCharList;
