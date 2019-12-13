import axios from 'axios';

import * as types from "./actionTypes";


export const getSmurfs = () => dispatch => {
  axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({
        type: types.GET_SMURF,
        payload: res.data,
      })
    })
    .catch()
}

export const onInputChange = (name, value) => {
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value }
  }
}

export const submitForm = () => {
  return {
    type: types.SUBMIT,
  }
}
