import * as types from './actionTypes';


const initialValueCount = 0;
export const countReducer = (count = initialValueCount, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}

const initialSmurfs = [
  {
    id: 0,
    name: "someone",
    age: 23,
    height: "4cm"
  }
]

export const smurfsReducer = (state = initialSmurfs, action) => {
  switch (action.type) {
    default:
      return state;
  }
}