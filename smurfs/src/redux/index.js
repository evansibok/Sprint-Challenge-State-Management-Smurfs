// Import needed files
import * as types from './actionTypes'

// Create initial slice of state
const initialSmurfs = [];

// create smurf reducer
export function smurfReducer(smurfs = initialSmurfs, action){
  switch(action.type){
    case types.GET_SMURF:
      return action.payload;
    default:
      return smurfs
  }
}
