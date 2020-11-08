import React, { Component } from "react"
import api from './api'

export default class Cotacao extends Component{
    
    state = {
        precos1: [],
        precos2: [],
        precos3: [],
        precos4: [],
        precos5: [],
    }

    async componentDidMount(){
        const btc = await api.get('BRLBTC/ticker')
        const eth = await api.get('BRLETH/ticker')
        const bch = await api.get('BRLBCH/ticker')
        const ltc = await api.get('BRLLTC/ticker')
        const xrp = await api.get('BRLXRP/ticker')
        
        // console.log(btc.data.data.buy)

        
        this.setState( {precos1 : btc.data.data, precos2 : eth.data.data, precos3 : bch.data.data,
             precos4 : ltc.data.data, precos5 : xrp.data.data });
  
       
        console.log("aloalo",this.state);
    }
        
    render(){

        const {precos1} = this.state;
        const {precos2} = this.state;
        const {precos3} = this.state;
        const {precos4} = this.state;
        const {precos5} = this.state;
        
       

        return(
        <div>
            
            <ul>

                <li>{'Preço BitCoin:'+" R$"+precos1.buy}</li>
                <li>{'Preço Ethereum:'+" R$"+precos2.buy}</li>
                <li>{'Preço BitCoin Cash:'+" R$"+precos3.buy}</li>
                <li>{'Preço LiteCoin:'+" R$"+precos4.buy}</li>
                <li>{'Preço Ripple:'+" R$"+precos5.buy}</li> 

            </ul>
            <br/>
            
        </div>
        );
    };

}