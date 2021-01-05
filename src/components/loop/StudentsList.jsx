import React from 'react';
import alunos from '../../data/alunos'

export default props => {
    const items = alunos.map((aluno) => {
        return (
            // o react precisa do atributo key para indentificar quando ocorrerem mudanças em cada elemento
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} --- {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {items}
            </ul>
        </div>
    )
}