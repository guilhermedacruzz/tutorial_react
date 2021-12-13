import React from "react";

import "./Title.css"

export default (props) =>
    <div className="Container">
        <h1 className="Title">{props.title}</h1>
        <h2 className="Subtitle">{props.subtitle}</h2>
    </div>
