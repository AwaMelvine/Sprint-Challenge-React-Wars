import React from "react";
import "./StarWars.css";

const StarWarsCharDetails = ({ char }) => {
  return (
    <div className={char.expand ? "expand" : "details"}>
      <h3>Details</h3>
      <li>Birth Year: {char.birth_year}</li>
      <li>Gender: {char.gender}</li>
      <li>Eye Color: {char.eye_color}</li>
    </div>
  );
};

export default StarWarsCharDetails;
