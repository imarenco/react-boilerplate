import { INCREMENT, DECREMENT } from '../types';

const initialState = { count: 0 };

export default function (state = initialState, action) {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }

  return state;
}
