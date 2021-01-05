// a aplicação só é inciada a partir de um arquivo index.js


// em relação ao css não é preciso var pq não vai acessar nada dentro do arquivo
import './index.css';
// reactdom é uma variável que pode receber qualquer nome, é só usar da mesma forma depois
import ReactDOM from 'react-dom';
// no caso do react não pode mudar pq ele é chamado de forma implicita no código
import React from 'react';

import App from './App'

const el =  document.getElementById('root');

// renderiza o texto do primeiro parâmetro no elemento do segundo parâmetro
ReactDOM.render('Oie', el);

// JSX: sintaxe que permite escrever código html pra ser renderizado (precisa importar o react)
const tag = <strong>Teste div</strong>;

// pode colocar uma const dentro do html usando o {}
ReactDOM.render(
    <div>
        { tag }
    </div>,
    el
)

// componentes são chamados como tags, o retorno da função será colocado no lugar
ReactDOM.render(
    <App></App>,
    el
)