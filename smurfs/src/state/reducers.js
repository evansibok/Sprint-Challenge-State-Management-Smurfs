import * as types from './actionTypes';

const initialSmurfs = [];
export const smurfsReducer = (state = initialSmurfs, action) => {
  switch (action.type) {
    case types.FETCH_SMURFS:
      return state.concat(action.payload)
    case types.ADD_SMURF:
      return state.concat(action.payload)
      case types.ON_INPUT_CHANGE:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
    default:
      return state;
  }
}