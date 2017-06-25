import React from 'react'

const Button = props => (
    <div className="actions">
        <button 
            onClick={props.onStart}>
            Iniciar</button>
        <button 
            onClick={props.onStop}>
            Detener</button>
    </div>
)

export default Button