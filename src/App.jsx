
import React from 'react'
import "./App.css";

import CompControlado from './components/forms/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import Products from './components/loop/Products';
import StudentsList from './components/loop/StudentsList'
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Aleatorio from './components/basics/Aleatorio';
import Card from './components/layout/Card';

export default () => (
    // pra renderizar mais de um componente, eles precisam estar envoltos por um mesmo elemento
    // pode usar o React.Fragment (pode usar props) ou apenas <></> que não será afetado o html
    <React.Fragment>
        <div className="App">
            <Card titulo="Componente Controlado">
                <CompControlado></CompControlado>
            </Card>
            <Card titulo="Comunicação Indireta">
                <IndiretaPai>

                </IndiretaPai>
            </Card>

            <Card titulo="Comunicação Direta">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Produtos" color="rgb(235, 156, 193, 0.2)">
                <Products></Products>
            </Card>
            <Card titulo="Repetição" color="rgb(235, 156, 193, 0.2)">
                <StudentsList></StudentsList>
            </Card>
            <Card titulo="Componente com Filhos">
                <Family secondName="Souza">
                    <FamilyMember name="Fernanda"/>
                    <FamilyMember name="Marcelo"/>
                    <FamilyMember name="Julia"/>
                </Family>
            </Card>
            <Card titulo="Aleatório" color="rgb(196, 240, 202)">
                <Aleatorio min={4} max={19} />
            </Card>
            <Card titulo="Primeiro">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="Notas">
                <ComParametro nome="Pedro Silva" nota={4.5} />
            </Card>
            <Card titulo="Notas">
                <ComParametro nome="Joana Martins" nota={9.5} />
            </Card>
            <Card titulo="Notas">
                <ComParametro nome="Paula Araújo" nota={7.5} />
            </Card>
            <Card titulo="Notas">
                <ComParametro nome="Marcelo Costa" nota={5} />
            </Card> 
        </div>
    </React.Fragment>
);

