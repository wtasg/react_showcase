import { useState } from "react";

type Cell = {
    value: string;
}

type Row = Cell[];

type State = {
    turn: string;
    board: Row[];
};

function TicTacToe() {
    const initialState: State = {
        turn: "X",
        board: [
            [{ value: "X" }, { value: "O" }, { value: " " },],
            [{ value: " " }, { value: " " }, { value: " " },],
            [{ value: " " }, { value: " " }, { value: " " },],
        ]
    };

    const [state, setState] = useState(initialState);

    return <DrawBoard state={state} />;
}

function DrawBoard({ state }: { state: State }) {
    return <>
        <div>Turn: {state.turn}</div>
        <Board board={state.board} />
    </>
}

function Board({ board }: { board: Row[] }) {
    const boardStyle = { display: "grid", gridGap: "10px", border: "thin solid red", padding: "10px" };
    return <div style={boardStyle}>
        {
            board.map((row: Row, rowIndex: number) => {
                return <Row row={row} index={rowIndex} />
            })
        }
    </div>
}

function Row({ row, index }: { row: Row, index: number }) {
    const rowStyle = { display: "grid", gridGap: "10px", gridTemplateColumns: "1fr 1fr 1fr", };

    return <div
        key={`board-row-${index}`}
        style={rowStyle}>
        {row.map((cell: Cell, cellIndex: number) => {
            return <Cell index={cellIndex} value={cell.value} />
        })}
    </div>
}

function Cell({ index, value }: { index: number, value: string }) {
    const cellStyle = {
        height: "100px",
        width: "100px",
        border: "thin solid yellow",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
        color: "white"
    };
    return <div
        key={`board-cell-${index}`}
        style={cellStyle}>
        {value}
    </div >
}

export {
    TicTacToe
}
