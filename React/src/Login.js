import './App.css';
import Inicial from './Inicial'
import Carteira from './carteira'
import React, { Component } from "react"
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom"


export default class Login extends Component{

  constructor(props){
    super(props);
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

  axios.post("http://localhost:3003/api/user/login", this.state.login)
        .then(response => {
          this.setState(state => {state.token=response.data})
          this.props.setToken(this.state.token)
          console.log("token:::",this.state.token)
          this.props.history.push("/inicial")

        })
        .catch(error => {
          alert("Informações Incorretas")
        })

}


  render(){

    return(
      
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

    
     
    );
  }

}
