import React from "react";

import "./Square.css"

export default (props) => 
    <button 
        className="Button"
        onClick={props.onClick}
    >
        {props.text}
    </button>