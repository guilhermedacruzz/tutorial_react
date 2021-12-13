import React, { useState } from "react";
import "./Game.css"

import Title from "./Title/Title"
import Board from "./Board/Board"
import Overcome from "./Overcome/Overcome"
import Command from "./Command/Command"

export default () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [XisNext, setXisNext] = useState(true)

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(i) {
        const new_squares = squares.slice()

        if(calculateWinner(new_squares) || new_squares[i])
            return

        new_squares[i] = XisNext ? "X" : "O"

        setXisNext(!XisNext)
        setSquares(new_squares)
    }

    return (
        <div className="Game">
            <Title
                title="Jogo da Velha"
                subtitle="Tutorial do React"
            />

            <Board
                squares={squares}
                handleClick={handleClick}
            />

            <Overcome
                overcome={calculateWinner(squares)}
            />

            <Command
                onClick={() => setSquares(Array(9).fill(null))}
            />
        </div>
    )
}
