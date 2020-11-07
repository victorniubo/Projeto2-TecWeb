import React from "react"
import './App.css';

var Compra = () => {
    return(
        <div>
             <u><h3>Efetuar Compra:</h3></u>
            <br/>
            <h3>&nbsp;&nbsp;&nbsp;Moeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valor</h3>
            
            
            <div id="itens">
            <div className="ItemE">
            
            <select name="cars" id="cars">
                    <option value="bitcoin">BitCoin</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="bitcoinC">BitCoin Cash</option>
                    <option value="litecoin">LiteCoin</option>
                    <option value="ripple">Ripple</option>
                </select>
                
                
                
            </div>
            <div className="ItemM">
            
                <input type="number" id="moeda1" name="moeda1" ></input>
                
            </div>
            <div className="ItemD">
                <input type="submit" value="Comprar"/>
            </div>

            </div>
           
            <br/>
           
            
                
        </div>
    );

}
export default Compra;