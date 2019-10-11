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

const initialValues = {
  id: '',
  name: '',
  age: '',
  height: ''
}
export const formReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }
}