import React from 'react'

import Square from './Square';
// import { useState } from 'react';
export default function Box({ xIsNext, val, onPlay }) {


// const [val , setval]=useState (Array (9).fill(null))
// const [xIsNext, setXIsNext] = useState(true);


const winner = calculateWinner(val);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

function calculateWinner(val) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (val[a] && val[a] === val[b] && val[a] === val[c]) {
        return val[a];
      }
    }
    return null;
  }

function handleClick(i) {

    if (val[i] || calculateWinner(val)){
        return;
    }

    const nextSquares = val.slice();
    if (xIsNext){
        nextSquares[i] = "X";
    }else{
        nextSquares[i] = "O";
    }
    
    // setval(nextSquares);
    // setXIsNext(!xIsNext);

    onPlay(nextSquares);
  }

  return (
    <div>
        <div className="status">{status}</div>
        
        {/* <div className="board-row"></div> */}
        
        <div className="board-row">

           <Square value={val[0]} onclic={()=> handleClick(0)}/>
           <Square value={val[1]} onclic={()=> handleClick(1)}/>
           <Square value={val[2]} onclic={()=> handleClick(2)}/>

        </div>
        <div className="board-row">

            <Square value={val[3]} onclic={()=> handleClick(3)}/>
            <Square value={val[4]} onclic={()=> handleClick(4)}/>
            <Square value={val[5]} onclic={()=> handleClick(5)}/>
        </div>


        <div className="board-row">

        <Square value={val[6]} onclic={()=> handleClick(6)}/>
        <Square value={val[7]} onclic={()=> handleClick(7)}/>
        <Square value={val[8]} onclic={()=> handleClick(8)}/>

        </div>

     
    </div>
  )
}
