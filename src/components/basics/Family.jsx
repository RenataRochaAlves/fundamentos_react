import React, {cloneElement} from 'react';

export default props => {
    return <div>
        {/* para passar do pai pro filho, é preciso passar como atributo uma props que veio do pai */}
        {/* <FamilyMember name="Fernanda" secondName={props.secondName}/> */}
        {/* com o elemento spread são passados todos os atributos do pai */}
        {/* <FamilyMember name="Marcelo" {...props}/>
        <FamilyMember name="Julia" secondName="Ferreira"/> */}

        {/* desse jeito é possível passar as props como um parâmetro da função que clona os elementos filhos
        nesse caso só pode receber um elemento como filho */}
        {/* {cloneElement(props.children, props)} */}


        {/* função que mapeia o array de filhos do elemento e cria um clone com acesso às propriedades do pai para cada um */}
        {props.children.map((child, i) => {
            return cloneElement(child, {...props, key: i});
        })}
    </div>
}