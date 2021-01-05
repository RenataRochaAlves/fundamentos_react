import React from 'react';

export default props => {
    return (
        <div>
            <div>{props.texto}</div>
            <div>{props.num}</div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}