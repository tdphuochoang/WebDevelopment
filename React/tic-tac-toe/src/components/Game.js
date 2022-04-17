import React from "react";
import Board from "./Board";

const Game = () => {
  const handleOnClick = () => {};

  return (
    <div className="gamescreen">
      <section className="left">
        <h1>Tic-Tac-Toe</h1>
        <Board onClick={handleOnClick} />{" "}
      </section>
      <section className="right">
        <div className="history"></div>
        <div className="winner"></div>
      </section>
    </div>
  );
};

export default Game;
