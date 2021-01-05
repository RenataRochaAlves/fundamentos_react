// a partir do useState é possível usar estados nos componentes
import React, { useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {

    // useState gera um array com o valor passado como parametro e uma função
    // para alterar o valor (que será chamada a partir de setNome por causa do destruct)
    let [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd, setNerd] = useState(false);

    // cria a função no pai e passa pro filho via props
    function fornecerInfo(nome, idade, nerd) {
        // isso altera o valor mas não reflete no que é renderizado
        // nome = nomeParam;
        // idade = idadeParam;
        // nerd = nerdParam;

        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <span>Nome: {nome} | </span>
                <span>Idade: {idade} | </span>
                <span>Nerd: {nerd ? 'Sim' : 'Não'}</span>
            </div>

            <IndiretaFilho quandoClicar={fornecerInfo}/>
        </div>
    )
}