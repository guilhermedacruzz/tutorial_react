import React from "react";
import "./Board.css"

import Square from "../Square/Square"


export default (props) => {
    function createSquare(i) {
        return <Square
            text={props.squares[i]}
            onClick={() => props.handleClick(i)}
        />
    }

    return (
        <div className="Board">
            <div className="Row">
                <div className="Col">
                    {createSquare(0)}
                </div>
                <div className="Col Col-Border-V">
                    {createSquare(1)}
                </div>
                <div className="Col">
                    {createSquare(2)}
                </div>
            </div>
            <div class="Row">
                <div className="Col Col-Border-H">
                    {createSquare(3)}
                </div>
                <div className="Col Col-Border-V Col-Border-H">
                    {createSquare(4)}
                </div>
                <div className="Col Col-Border-H">
                    {createSquare(5)}
                </div>
            </div>
            <div class="Row">
                <div className="Col">
                    {createSquare(6)}
                </div>
                <div className="Col Col-Border-V">
                    {createSquare(7)}
                </div>
                <div className="Col">
                    {createSquare(8)}
                </div>
            </div>
        </div>
    )
}

