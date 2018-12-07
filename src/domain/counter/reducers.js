import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../../action_types';

const initialState = { count: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
    case INCREMENT_ASYNC.SUCCESS:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
