import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../types';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC,
  };
}

