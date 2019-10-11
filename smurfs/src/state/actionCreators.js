import axios from 'axios';
import * as types from './actionTypes';


const smurfsApi = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {

  axios.get(smurfsApi)
    .then(res => {
      dispatch({ type: types.FETCH_SMURFS, payload: res.data })
    })
    .catch(err => err) 
}

export const changeInput = (target) => {
  return { 
    type:types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    } 
  }
}

// export const addSmurfs = () => dispatch => {

//   axios.post(smurfsApi)
//     .then(res => dispatch({ type: types.ADD_SMURF, payload: res.data}))
//     .catch(err => err)
// }
