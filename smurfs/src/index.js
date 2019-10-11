import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./components/App";
import * as reducers from './state/reducers';

const generalReducer = combineReducers({
  count: reducers.countReducer,
})

const store = createStore(
  generalReducer,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
