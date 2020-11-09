import React, { Component } from 'react'
import './App.css';
import api from './api'
import axios from 'axios';


export default class Venda extends Component{

    constructor(props){
        super(props);
        this.state = {
            number:0,
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
        this.makeJason = this.makeJason.bind(this);
        // this.sendJason = this.sendJason(this);
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
            state.selec = event.target.value
            return state
        }
        this.setState(handleState(this.state, event))
        console.log("moeda selecionada", this.state.selec)
    }
    
    handleChange(event) {
        var handleState = (state, event) => {
            state.number = event.target.value
            return state
        }
        console.log(event.target.value)
        this.setState(handleState(this.state, event))
        console.log("valor:", this.state)
        
    }

    makeJason(){
        this.setState(state => {
            state.venda.coin = state.selec
            state.venda.amount = state.number
            // state.compra.compra.price
        });
    }

    // sendJason(){
    //     axios.post("http://localhost:3000/addTrade", this.state.compra)
    // }

   

    render() {

        return(
            <div>
                 <u><h3>Efetuar Venda:</h3></u>
                <br/>
                <h3>&nbsp;&nbsp;&nbsp;Moeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valor</h3>
    
                
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
                
                    <input type="number" id="moeda2" name="moeda2" value = {this.state.number} 
                    onChange={this.handleChange}></input>
                    
                </div>
    
                <div className="ItemD">
                    <input type="submit" value="Vender" onClick={this.sendJason}/>
                </div>
    
                </div>
               
                <br/>
               
                
                    
            </div>
        );

    }
}
