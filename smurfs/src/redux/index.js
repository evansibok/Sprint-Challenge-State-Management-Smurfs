// Import needed files
import * as types from './actionTypes'

// Create initial slice of state
const initialSmurfs = [
  {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  }
];

// create smurf reducer
export function smurfReducer(smurfs = initialSmurfs, action){
  switch(action.type){
    default:
      return smurfs
  }
}
