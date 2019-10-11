import axios from 'axios';
import * as types from './actionTypes';

const smurfsApi = 'http://localhost:3333/smurfs';

export const increment = () => {
  return { type: types.INCREMENT };
}

export const decrement = () => {
  return { type: types.DECREMENT };
}

export const reset = () => {
  return { type: types.RESET };
}

export const getSmurfs = () => dispatch => {

  axios.get(smurfsApi)
    .then(res => {
      dispatch({ type: types.FETCH_SMURFS, payload: res.data })
    })
    .catch(err => err) 
}