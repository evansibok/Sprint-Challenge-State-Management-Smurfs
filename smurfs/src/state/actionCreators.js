import axios from 'axios';

import * as types from './actionTypes';

export const increment = () => {
  return { type: types.INCREMENT };
}

export const decrement = () => {
  return { type: types.DECREMENT };
}

export const reset = () => {
  return { type: types.RESET };
}