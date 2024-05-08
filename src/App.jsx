import Player from "./components/Player"
import GameBoard from "./components/GameBaord"
import { useState } from "react"
import Log from "./components/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null,null,],
  [null,null,null,],
  [null,null,null,]
]

// Using Derive Function helps decrease the usage of state.
function  deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if (gameTurns.length>0 && gameTurns[0].player === "X"){
    currentPlayer ='O';
  }
  return currentPlayer
}


function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns]= useState([]);

  const activePlayer = deriveActivePlayer(gameTurns)
  let gameBoard = initialGameBoard;
    for (const turn of gameTurns){
        const { square, player} = turn;
        const { row, col } = square;

        gameBoard[row][col]=player;
    }
    let winner; 
  for (const combination of WINNING_COMBINATIONS){
    const  firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const  secondSquareSymbol =  gameBoard[combination[1].row][combination[1].column];
    const  thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol ;
    }
  }
  
  function handleSelectedSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer)=>curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updateTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevTurns,
      ];
      console.log(updateTurns);
      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        {winner && <p>YOU WON, {winner} !</p>}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
