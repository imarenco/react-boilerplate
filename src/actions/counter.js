import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../types';


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC });
