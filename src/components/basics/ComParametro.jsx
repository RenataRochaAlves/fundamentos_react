import React from 'react';

// os atributos da tag do componente podem ser acesssados como parametro (props) da função, que é um objeto cujas chaves são os atributos passados no index.js
// props são somente leitura, não podem ser alterados, o que muda é o estado

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
    return (
        <div>
            <h2>Situação do Aluno</h2>
            <p>
                <strong>{ props.nome } </strong>
                 tem nota { props.nota } e está { status }
            </p>
        </div>
    )
}