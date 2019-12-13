import axios from 'axios';

import * as types from "./actionTypes";


export const getSmurfs = () => dispatch => {
  axios.get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({
        type: types.GET_SMURFS,
        payload: res.data,
      })
    })
    .catch(err => err.message)
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

export const addSmurf = (newSmurf) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({
        type: types.ADD_SMURF,
        payload: newSmurf,
      })
    })
    .catch(err => {
      return err
    })
}