import './App.css';
import Inicial from './Inicial'
import Carteira from './carteira'
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

    this.handleChange = this.handleChange.bind(this);

}

handleChange = (e) => {

  this.setState(state => {state.login[e.target.name]= e.target.value})
  
  
}

submitHandler = e => {
  e.preventDefault()
  console.log(this.state)
  // axios.defaults.headers.post['auth-token'] = 'value'
  axios.post("http://localhost:3003/api/user/login", this.state.login)
        .then(response => {
          console.log(response.data)
          this.setState(state => {state.token=response.data})
          // this.props.history.push("/inicial")

        })
        .catch(error => {
          alert("Informações Incorretas")
        })

}


  render(){

    return(
      <BrowserRouter>
      <div className="App">
      <form onSubmit={this.submitHandler}>
      <br/><br/>
      <br/><br/>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={this.handleChange}/> 
        <br/><br/>

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" onChange={this.handleChange}/>

        <br/><br/>

        <button type="submit">Login</button>

      </form>
      </div>

    
    <Switch>
    <Route 
    path="/inicial" 
    render={props => (
      <Inicial { ... props} token={this.state.token}/>
    )}/>
    <Route 
    path="/carteira" 
    render={props => (
      <Carteira { ... props} token={this.state.token}/>
    )}/>
    </Switch>
    </BrowserRouter>
    );
  }

}
