import React from "react";
import { connect } from 'react-redux';

export const Counter = props => {
  // `count` comes from the state of the app
  // `increment` is an action creator
  // THE GOODIES COME FROM PROPS!!!!! YOU WILL FORGET THIS
  const { count, increment, decrement } = props;
  return (
    <div className="component">
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    increment: state.increment,
    decrement: state.decrement
  };
}

export default connect(
  mapStateToProps,
  {}
)(Counter);
