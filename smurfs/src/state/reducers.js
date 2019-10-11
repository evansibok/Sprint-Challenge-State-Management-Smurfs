import * as types from './actionTypes';

const initialSmurfs = [];
export const smurfsReducer = (state = initialSmurfs, action) => {
  switch (action.type) {
    case types.FETCH_SMURFS:
      return state.concat(action.payload)
    default:
      return state;
  }
}