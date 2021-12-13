import React from "react";
import "./Overcome.css"

export default (props) => {

    function showOvercome(props) {
        let msg = "Sem Resultado!"

        if (props.overcome)
            msg = `O ${props.overcome} ganhou!!!`

        return msg
    }

    return (
        <>
            <h3 className="Overcome">{showOvercome(props)}</h3>
        </>
    )
}