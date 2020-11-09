import React, { Component } from 'react'
import './App.css';
import api from './api'
import axios from 'axios';


export default class Venda extends Component{

    constructor(props){
        super(props);
        this.state = {
            venda: {
                username: "a",
                coin: "",
                type: "Venda",
                price: 1,
                amount: 0
            },
           
        }

        this.changeMoeda = this.changeMoeda.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
 
        
      

 

    changeMoeda(event){
        var handleState = (state, event) => {
            state.venda.coin = event.target.value
            return state
        }
        this.setState(handleState(this.state, event))
        console.log("moeda selecionada", this.state.venda.coin)
    }
    
    handleChange(event) {
        var handleState = (state, event) => {
            state.venda.amount = event.target.value
            return state
        }
        console.log(event.target.value)
        this.setState(handleState(this.state, event))
        console.log("valor:", this.state)
        
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3003/api/trades/addTrade", this.state.venda, {headers:{"auth-token":this.props.location.tokenProps.token}})
    }


   

    render() {

        const {venda} = this.state

        return(
            <div>
                 <u><h3>Efetuar Venda:</h3></u>
                <br/>
                <h3>&nbsp;&nbsp;&nbsp;Moeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantidade</h3>
    
                <form onSubmit={this.submitHandler} >
                <div id="itens">
                <div className="ItemE">
                
                <select onChange={this.changeMoeda} name="coins" id="coins">
                        <option>Selecione...</option>
                        <option value="BTC">BitCoin</option>
                        <option value="ETH">Ethereum</option>
                        <option value="BCH">BitCoin Cash</option>
                        <option value="LTC">LiteCoin</option>
                        <option value="XRP">Ripple</option>
                    </select>
                    
        
                    
                </div>
                <div className="ItemM">
                
                    <input type="number" id="moeda1" name="moeda1" value = {this.state.venda.amount} 
                    onChange={this.handleChange}></input>
                    
                </div>
    
                <div className="ItemD">
                    <button type="submit"  >Vender</button>
                </div>
    
                </div>
                </form>
                <br/>
               
                
                    
            </div>
        );

    }
}

