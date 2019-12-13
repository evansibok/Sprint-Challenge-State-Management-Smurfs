import React, { Component } from "react";
import "./styles.scss";

import SmurfsList from './smurfsList';




class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE! 2.0 W/ Redux</h1>
        <SmurfsList />
      </div>
    );
  }
}

export default App;
