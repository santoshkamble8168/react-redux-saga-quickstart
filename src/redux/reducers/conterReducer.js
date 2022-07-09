import { INCREMENT, DECREMENT, GET_USERS_LIST, GET_USERS_LIST_SUCCESS } from '../constants/counterConstant';

const INITIAL_STATE = {
	count: 0,
  users: []
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
    case GET_USERS_LIST:
      return {
        ...state,
        users: [],
      };
    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

		default:
			return state;
	}
};

export default reducer;