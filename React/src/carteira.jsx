import React, { Component } from 'react'
import apint from './apint'
import './App.css';


export default class Carteira extends Component{

    constructor(props){
        super(props);
        this.state = {
            listaTrans:[],
            portfolio:[]
            
        }

        console.log(this.props.location.tokenProps)
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    
    async componentDidMount(){
        const allT = await apint.get('api/trades/all/',{headers:{"auth-token":this.props.location.tokenProps.token}})
                
        
        
        const portfolio = await apint.get("api/trades/portfolio",{headers:{"auth-token":this.props.location.tokenProps.token}})
        // console.log("portfolio::", portfolio.data)

        this.setState( {listaTrans : allT.data, portfolio:portfolio.data});
       
    }

    
    

    render() {

        var {listaTrans, portfolio} = this.state;
        

        var listTransacs = listaTrans.map(function(transaction) {
            return (
            
            <li>{transaction.type+", "+transaction.coin+", "+transaction.amount}</li>
            
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
                    <li>{"BitCoin: "+portfolio.BTC}</li>
                    <li>{"Ethereum: "+portfolio.ETH}</li>
                    <li>{"BitCoin Cash: "+portfolio.BCH}</li>
                    <li>{"LiteCoin: "+portfolio.LTC}</li>
                    <li>{"Ripple: "+portfolio.XRP}</li>
                </ul>

            </div>

            </div>
            </div>
        );
    }

}