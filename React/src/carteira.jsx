import react, { Component } from 'react'

export default class Carteira extends Component{

    render() {

        var trans = [
            {transac: 'venda 1'},
            {transac: 'compra 1'} 
        ];

        var moedas = [
            {moeda1: 'BitCoin:'},
            {moeda2: 'Ethereum:'},
            {moeda3: 'BitCoin Cash:'},
            {moeda4: 'LiteCoin:'},
            {moeda5: 'Ripple:'}
        ];

        var listTransacs = trans.map(function(transaction) {
            return (
            
            <li>{transaction.transac}</li>
            
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
                
                <h3>Lista de Transações</h3>
               
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