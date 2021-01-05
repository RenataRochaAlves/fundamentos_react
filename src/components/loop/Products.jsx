import React, { cloneElement } from 'react';
import produtos from '../../data/produtos'

export default props => {
    const items = produtos.map((produto) => {
        return (
            <tr key={produto.id} className={produto.id % 2 == 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr> 
                </thead>
                <tbody>
                    {items} 
                </tbody>
            </table>
        </div>
    )
}
