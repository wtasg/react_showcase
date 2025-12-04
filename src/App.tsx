import { useState } from 'react'
import './App.css'
import { TicTacToe } from './showcase/tic-tac-toe/TicTacToe'

function App() {
    const [path, setPath] = useState(localStorage.getItem("route") || "/");

    function changeRoute(route: string) {
        setPath(route);
        localStorage.setItem("route", route);
    }

    return (
        <div className="App">
            <nav>
                <button onClick={() => changeRoute("/")}>Home</button>
                <button onClick={() => changeRoute("/tic-tac-toe")}>Tic Tac Toe</button>
            </nav>
            <main role="main">
                {
                    path === "/" &&
                    <section>
                        <h1>Hi!</h1>
                        <p>This is my showcase for react apps.</p>
                        <div style={{ height: "100px", width: "content", margin: "auto" }}>
                            <a href="https://github.com/wtasg/meetonline">MeetOnline App Repo</a>
                        </div>
                    </section>
                }
                {
                    path === "/tic-tac-toe" &&

                    <section>
                        <TicTacToe />
                    </section>
                }
            </main>
        </div >
    )
}

export default App
