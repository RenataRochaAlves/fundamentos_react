import React from 'react';

export default props => {
    
    return (
        <div>
            <div>Filho</div>
             {/* a função é criada no pai e passada pro filho como props,
             quando a função é chamada no filho o pai tem acesso às infos  */}
            <button onClick={
                // no onclick o filho executa a função passada pelo pai na
                // propriedade "quandoClicar"
                evt => {
                    props.quandoClicar('João', 53, true)
                }
            }>
                Fornecer info
            </button>
        </div>
    )
}