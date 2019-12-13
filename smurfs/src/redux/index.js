// Import needed files
import * as types from './actionTypes'

// Create initial slice of state
const initialSmurfs = [];

export function smurfReducer(smurfs = initialSmurfs, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return action.payload;
    case types.ADD_SMURF:
      return [...smurfs, action.payload,];
    default:
      return smurfs
  }
}

const initialSmurfForm = {
  name: "",
  age: "",
  height: "",
}

export function smurfForm(form = initialSmurfForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value,
      };
    case types.SUBMIT:
      return initialSmurfForm;
    default:
      return form
  }
}
