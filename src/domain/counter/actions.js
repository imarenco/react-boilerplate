import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../../action_types';


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC.EVENT });
