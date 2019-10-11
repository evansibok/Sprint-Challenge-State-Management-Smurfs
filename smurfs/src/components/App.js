import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import "./App.css";

export const App = props => {
  // `count` comes from the state of the app
  // `increment` is an action creator
  // THE GOODIES COME FROM PROPS!!!!! YOU WILL FORGET THIS
  const { count, increment, decrement, reset } = props;
  return (
    <div className="component">
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(App);
