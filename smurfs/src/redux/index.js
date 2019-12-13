// Import needed files
import * as types from './actionTypes'

// Create initial slice of state
const initialSmurfs = [];

// create smurf reducer
export function smurfReducer(smurfs = initialSmurfs, action){
  switch(action.type){
    default:
      return smurfs
  }
}
