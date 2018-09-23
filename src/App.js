import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Travels</h1>
        </header>
        <Travel
          destination = "Asie"
          pays = "thailande"
          photo = "belle" 
          distance = "lointaine" 
        />
        <Travel
          destination = "europe"
          pays = "espagne"
          photo = "joli" 
          distance = "proche" 
        />
      </div>
    );
  }
}

export default App;