import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";

import * as reducers from '../src/redux/'


// combine reducers here
const rootReducer = combineReducers({
  smurfs: reducers.smurfReducer,
  form: reducers.smurfForm,
})

// Create redux store
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
