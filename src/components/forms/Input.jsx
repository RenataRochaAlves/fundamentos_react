import React, {useState} from 'react';

export default props => {
    const [valor, setValor] = useState('Inicial');

    // função executada no onchange, altera o estado a partir do que for digitado
    // e automaticamente reflete a mudança na interface
    function quandoMudar(evt) {
        setValor(evt.target.value);
    }

    return (
        <div>
            {/* com componentes controlados não é possível mudar 
            valores diretamente a partir da interface, é preciso mudar o
            estado e a partir dele refletir as mudanças */}
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar} type="text"/>
            {/* readONly indica que o componente não está sendo tratado pelos eventos */}
            <input value={valor} readOnly type="text"/>
            {/* o value undefined indica que o componente não é controlado e pode ser alterado livremente */}
            <input value={undefined} type="text"/>
        </div>
    )
}