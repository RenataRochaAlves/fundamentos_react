import React, { Component } from 'react';

export default class Contador extends Component {

    // não precisa do constructor, pode declarar o state solto dentro 
    // da classe (sem o this)
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //     numero: props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // com arrow functions o this sempre será referente ao contexto em que a função foi criada
    // função pra incrementar o contador
    inc = () => {
        // função setState vem do Component que a classe extende
        // passa no obj apenas o atributo que se quer alterar
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evt) => {
        this.setState({
            // o + converte em um inteiro
            passo: +evt.target.value
        })
    }
    

    render() {
        return (
            <div>
                <h2>Contador</h2>
                {/* acessa as props da mesma forma, porém colocando o this na frente */}
                {/* <p>Valor Inicial: {this.state.numero}</p> */}
                <h3>Valor Atual: {this.state.numero}</h3>
                <button onClick={this.inc} >+</button>
                <button onClick={this.dec} >-</button>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input type="number" id="passoInput" 
                    value={this.state.passo} onChange={this.setPasso}/>
                </div>
            </div>
        )
    }
}