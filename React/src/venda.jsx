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
            BTC: [],
            ETH: [],
            BCH: [],
            LTC: [],
            XRP: []      
        }

        this.changeMoeda = this.changeMoeda.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
       
    }
    async componentDidMount(){
        const btc = await api.get('BRLBTC/ticker')
        const eth = await api.get('BRLETH/ticker')
        const bch = await api.get('BRLBCH/ticker')
        const ltc = await api.get('BRLLTC/ticker')
        const xrp = await api.get('BRLXRP/ticker')
        
        this.setState( {BTC : btc.data.data, ETH : eth.data.data, BCH : bch.data.data,
            LTC : ltc.data.data, XRP : xrp.data.data });
        
      
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
        axios.post("http://localhost:3000/addTrade", this.state.venda)
    }


    // sendJason(){
    //     axios.post("http://localhost:3000/addTrade", this.state.compra)
    // }

   

    render() {

        const {compra} = this.state

        return(
            <div>
                 <u><h3>Efetuar Venda:</h3></u>
                <br/>
                <h3>&nbsp;&nbsp;&nbsp;Moeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valor</h3>
    
                <form onSubmit={this.submitHandler} >
                <div id="itens">
                <div className="ItemE">
                
                <select onChange={this.changeMoeda} name="coins" id="coins">
                        <option>Selecione...</option>
                        <option value="BitCoin">BitCoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="BitCoin Cash">BitCoin Cash</option>
                        <option value="LiteCoin">LiteCoin</option>
                        <option value="Ripple">Ripple</option>
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

