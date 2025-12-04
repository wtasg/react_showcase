import { useState } from "react";
import "./TicTacToe.css"

const initialSquares = (): ("X" | "O" | "")[] => Array(9).fill(0).map(() => "");

function TicTacToe() {
    const [squares, setSquares] = useState<("X" | "O" | "")[]>(initialSquares);
    const [gameState, setGameState] = useState<"over" | "playing" | "tied">("playing");
    const [playerWon, setPlayerWon] = useState<"X" | "O" | "">("");
    const [wincom, setWincom] = useState<number[]>([]);
    const [moves, setMoves] = useState(9);

    function onSquareClick(index: number) {
        // code-khichdi: opposite of separation of concerns
        // jiska kaam ussi ko saje...
        if (squares[index] !== "" || gameState === "over" || playerWon !== "" || gameState === "tied") {
            return;
        }
        const newMoves = moves - 1;
        setMoves(newMoves);
        const nextTurn = turn(squares);
        console.log({ newMoves, squares, nextTurn });
        const newSquares = [...squares];
        newSquares[index] = nextTurn;
        setSquares(newSquares);

        const { won, combination } = winner(newSquares);
        if (won === "X" || won === "O") {
            setWincom(combination);
            setGameState("over");
            setPlayerWon(won);

            return;
        }
        if (newMoves === 0) {
            setGameState("tied");
            return;
        }
    }

    function reset() {
        setSquares(initialSquares());
        setPlayerWon("");
        setGameState("playing");
        setWincom([]);
        setMoves(9);
    }

    return <div className="game">
        <h1>Game: Tic Tac Toe</h1>
        <div className="board">
            {
                squares
                    .map(
                        (val: string, index: number) =>
                            <Square
                                key={`square-${index}`}
                                index={index}
                                val={val}
                                onSquareClick={onSquareClick}
                                klass={(playerWon !== "" && wincom.includes(index)) ? "wincom" : ""}
                            />
                    )
            }
        </div>
        <div className="state">
            <button className="reset" onClick={reset}>reset</button>
            {playerWon !== "" && <div className="won">{playerWon}</div>}
            {gameState === "over" && <div className="over">
                Game Over!
            </div>
            }
            {gameState === "tied" && <div>Tied</div>}
        </div>
    </div>
}

function Square({ index, val, onSquareClick, klass }: { index: number, val: string, onSquareClick: (index: number) => void, klass: string }) {
    return <div
        className={`square ${val === "" ? "empty" : "filled"} ${klass}`}
        onClick={() => onSquareClick(index)}
    >
        {val}
    </div>
}

function winner(squares: ("X" | "O" | "")[]): { won: "X" | "O" | "", combination: number[] } {
    const winningRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const winningColumns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonals = [[0, 4, 8], [2, 4, 6]];
    const winningCombinations = [
        ...winningRows,
        ...winningColumns,
        ...diagonals
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        const curr = winningCombinations[i];
        const [ai, bi, ci] = curr;
        if (squares[ai] === squares[bi] && squares[bi] === squares[ci] && squares[ci] !== "") {
            return { won: squares[ai], combination: [ai, bi, ci] };
        }
    }
    return { won: "", combination: [] };
}

function turn(squares: ("X" | "O" | "")[]): ("X" | "O" | "") {
    if (squares.every(val => val === "")) {
        return "X";
    }
    if (squares.every(val => val === "X" || val === "O")) {
        return "";
    }
    const val = squares.reduce((a, c) => a += c === "X" ? +1 : c === "O" ? -1 : 0, 0)
    console.log({ val });
    if (val === 0) {
        return "X";
    } else if (val === 1) {
        return "O";
    }
    return "";
}

export {
    TicTacToe
}
