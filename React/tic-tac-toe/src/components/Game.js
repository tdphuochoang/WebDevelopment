import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleOnClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    //If user click on an occupied square or if there is a winner, return
    if (winner || squares[i]) return;
    //Put an X or O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : "Go to start";
      return (
        <li key={move}>
          <button className="step_btn" onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      );
    });

  return (
    <div className="gamescreen">
      <section className="left">
        <h1>Tic-Tac-Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleOnClick} />{" "}
      </section>
      <section className="right">
        <div className="history">
          <p>
            {winner
              ? "Winner: " + winner
              : "Next player: " + (xIsNext ? "X" : "O")}
          </p>
          {renderMoves()}
        </div>
        <div className="winner">
          <h1>{winner ? winner + " win!!" : ""}</h1>
        </div>
      </section>
    </div>
  );
};

export default Game;
