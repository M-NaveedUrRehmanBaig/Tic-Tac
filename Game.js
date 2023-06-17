import React from 'react'
import Box from './Box'
import { useState } from 'react';
export default function Game() {


  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    // TODO
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }


  function jumpTo(nextMove) {
    // TODO
  }


  const moves = history.map((val, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  return (
    <div >
        <div className='game_board'>

        <Box xIsNext={xIsNext} val={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="game_info">

        <ol>{moves}</ol>
        </div>
    </div>
  )
}
