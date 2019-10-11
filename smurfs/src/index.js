import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./components/App";
import * as reducers from './state/reducers';

const generalReducer = combineReducers({
  count: reducers.countReducer,
})

const store = createStore(generalReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
