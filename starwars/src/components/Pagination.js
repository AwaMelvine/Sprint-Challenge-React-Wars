import React from "react";
import "./StarWars.css";

const Pagination = ({ previous, next, nextPage, previousPage }) => {
  return (
    <div className="pagination">
      <button disabled={!previous} onClick={() => previousPage()}>
        Previous
      </button>
      <button disabled={!next} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
