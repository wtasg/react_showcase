import './App.css'
import { TicTacToe } from './showcase/tic-tac-toe/TicTacToe'

function App() {
    return (
        <>
            <h1>Hi!</h1>
            <p>This is my showcase for react apps.</p>
            <div style={{ height: "100px", width: "content", margin: "auto" }}>
                <a href="https://github.com/wtasg/meetonline">MeetOnline App Repo</a>
            </div>
            <TicTacToe />
        </>
    )
}

export default App
