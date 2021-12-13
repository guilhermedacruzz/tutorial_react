import React from "react";
import "./Command.css"

export default (props) => 
    <>
        <button
            className="Reset"
            onClick={props.onClick}
        >
            Resetar
        </button>
    </>