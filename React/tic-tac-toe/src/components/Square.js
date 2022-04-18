import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button className="game_square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
