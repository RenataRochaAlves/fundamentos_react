import "./Card.css"
import React from 'react';

export default props => {

    return (
        <div className="Card" style={{
            backgroundColor: props.color || 'rgb(241, 241, 241)'
            }}>
            <div className="Title">{ props.titulo }</div>
            {/* props.children pega o conteúdo que for inserido dentro da tag do componente */}
            <div className="Content">{props.children}</div>
        </div>
    ) 
}