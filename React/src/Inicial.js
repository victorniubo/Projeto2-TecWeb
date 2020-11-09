import React, { Component } from "react"
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom"
import Carteira from './carteira'
import Cotacao from './cotacao'
import Compra from './compra'
import Venda from './venda'


export default class Inicial extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return ( 

            <Router>
        
        <div className="App">
            
            <h2>Carteira de Criptomoedas</h2>
            &nbsp;
            &nbsp;
            <NavLink activeStyle={{color:'red'}} to="/carteira" >Carteira</NavLink>
            &nbsp;
            &nbsp;
            <NavLink activeStyle={{color:'red'}} to="/cotacao">Cotação</NavLink>
            &nbsp;
            &nbsp;
            <NavLink activeStyle={{color:'red'}} to="/compra">Compra</NavLink>
            &nbsp;
            &nbsp;
            <NavLink activeStyle={{color:'red'}} to="/venda">Venda</NavLink>
            &nbsp;
            &nbsp;
      </div>
      <Switch>
        <Route path="/carteira" component={Carteira}/>
        <div className="Lista">
        <Route path="/cotacao" component={Cotacao}/>
        <Route path="/compra" component={Compra}/>
        <Route path="/venda" component={Venda}/>
        </div>
      </Switch>
      </Router>
      );
    }
}