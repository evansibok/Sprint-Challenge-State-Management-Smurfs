import React, { Component } from "react";
import "./styles.scss";

import SmurfsList from './smurfsList';
import SmurfForm from "./smurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
