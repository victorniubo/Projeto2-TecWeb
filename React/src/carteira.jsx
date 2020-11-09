import React, { Component } from 'react'
import apint from './apint'
import './App.css';
import axios from 'axios';


export default class Carteira extends Component{

    constructor(props){
        super(props);
        this.state = {
            listaTrans:[]
            
        }

        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleta = this.deleta.bind(this);
    }


    async componentDidMount(){
        const allT = await apint.get('api/trade/all/'+this.props.token)
                
        this.setState( {listaTrans : allT.data });
  
       
    }

    deleta = (id) => {
        axios.delete("http://localhost:3000/deleteTrade/"+id)
        
    }

    render() {

        var {listaTrans} = this.state;

        var moedas = [
            {moeda: 'BitCoin:'},
            {moeda: 'Ethereum:'},
            {moeda: 'BitCoin Cash:'},
            {moeda: 'LiteCoin:'},
            {moeda: 'Ripple:'}
        ];

        var listTransacs = listaTrans.map(function(transaction) {
            return (
            
            <li>{transaction.type+", "+transaction.coin+", "+transaction.amount}
            &nbsp;
            &nbsp;
                <input type="button" className="button.css" value="Delete" />
            </li>
            
            );
        });

        var listaMoedas = moedas.map(function(moeda) {
            return (
            <li>{moeda.moeda}</li>
            );
        });

        return (

            <div>
            <div className="ItemE2">
            <div className="Lista">
                
                <h3>Lista de Transações(Tipo, Moeda, Quant.)</h3>
               
                <ul>
                    {listTransacs}
                </ul>

            </div>
            </div>

            <div className="ItemD2">

                <div className="Lista">
                
                <h3>Totais:</h3>
               
                <ul>
                    {listaMoedas}
                </ul>

            </div>

            </div>
            </div>
        );
    }

}