
import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log";
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  let activePlayer = "X";
  if(gameTurns.length > 0 && gameTurns[0].player === "X"){ activePlayer = "O";}
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex)
  {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row : rowIndex, col: colIndex}, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    }
    );
  }

  return <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol={"X"} isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol={"O"} isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
  </main>
}

export default App