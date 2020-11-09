import React, { Component } from 'react'
import './App.css';
import api from './api'
import axios from 'axios';


export default class Compra extends Component{

    constructor(props){
        super(props);
        this.state = {
            compra: {
                username: "a",
                coin: "",
                type: "Compra",
                price: 1,
                amount: 0
            },
               
        }

        this.changeMoeda = this.changeMoeda.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        // this.makeJason = this.makeJason.bind(this);
        // this.sendJason = this.sendJason(this);
    }
    // async componentDidMount(){
    //     const btc = await api.get('BRLBTC/ticker')
    //     const eth = await api.get('BRLETH/ticker')
    //     const bch = await api.get('BRLBCH/ticker')
    //     const ltc = await api.get('BRLLTC/ticker')
    //     const xrp = await api.get('BRLXRP/ticker')
        
    //     this.setState( {BTC : btc.data.data, ETH : eth.data.data, BCH : bch.data.data,
    //         LTC : ltc.data.data, XRP : xrp.data.data });
        
      
//    }
 

    changeMoeda(event){
        var handleState = (state, event) => {
            state.compra.coin = event.target.value
            return state
        }
        this.setState(handleState(this.state, event))
        console.log("moeda selecionada", this.state.compra.coin)
    }
    
    handleChange(event) {
        var handleState = (state, event) => {
            state.compra.amount = event.target.value
            return state
        }
        console.log(event.target.value)
        this.setState(handleState(this.state, event))
        console.log("valor:", this.state)
        
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:3003/api/trades/addTrade", this.state.compra, {headers:{"auth-token":this.props.location.tokenProps.token}})
    }


    // sendJason(){
    //     axios.post("http://localhost:3000/addTrade", this.state.compra)
    // }

   

    render() {

        const {compra} = this.state

        return(
            <div>
                 <u><h3>Efetuar Compra:</h3></u>
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
                
                    <input type="number" id="moeda1" name="moeda1" value = {this.state.compra.amount} 
                    onChange={this.handleChange}></input>
                    
                </div>
    
                <div className="ItemD">
                    <button type="submit"  >Comprar</button>
                </div>
    
                </div>
                </form>
                <br/>
               
                
                    
            </div>
        );

    }
}

