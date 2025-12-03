import './App.css'
import { TicTacToe } from './showcase/tic-tac-toe/TicTacToe'

function App() {
    return (
        <>
            <div className="left-side-bar">
                <a href="/tic-tac-toe">Tic Tac Toe</a>
            </div>
            <main role="main">
                <section>
                    <h1>Hi!</h1>
                    <p>This is my showcase for react apps.</p>
                    <div style={{ height: "100px", width: "content", margin: "auto" }}>
                        <a href="https://github.com/wtasg/meetonline">MeetOnline App Repo</a>
                    </div>
                </section>
                <section>
                    <TicTacToe />
                </section>
            </main>
        </>
    )
}

export default App
