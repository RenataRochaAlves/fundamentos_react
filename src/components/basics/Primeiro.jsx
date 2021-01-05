// precisa importar o react no componente pra usar o JSX
import React from 'react';

// o export default faz com que essa função seja acessada na variável criada quando o arquivo for importado
export default function Primeiro() {
    const msg = 'teste mensagem';
    // se estiver indentado, conteúdo do return precisa estar entre ()
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>{ msg }</p>
        </div>    
    );
}