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