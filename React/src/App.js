import './App.css';
import Inicial from './Inicial'
import Carteira from './carteira'
import Login from './Login'
import React, { Component } from "react"
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom"


export default class App extends Component{

  constructor(){
    super();
    this.state = {

      login:{},
      loggedInStatus: false,
      token: {}

      
        
    }
    this.setToken = this.setToken.bind(this)
  }

  setToken(data){
      this.setState(state =>{
        state.token = data
        
      })
      axios.defaults.headers.common['auth-token'] = this.state.token
      console.log(this.state)
  }
  

  render(){

    return(
      
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route 
      path="/" exact
      render={props => (
      <Login { ... props} setToken={this.setToken}/>
      )}/>
      <Route 
      path="/inicial" exact
      render={props => (
      <Inicial { ... props} token={this.state.token}/>
      )}/>
      <Route 
      path="/carteira" exact
      render={props => (
        <Carteira { ... props} token={this.state.token}/>
      )}/>
      </Switch>
      </BrowserRouter>
      </div>
    
    );
  }

}
