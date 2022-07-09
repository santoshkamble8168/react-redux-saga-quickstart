import {INCREMENT, DECREMENT, GET_USERS_LIST, GET_USERS_LIST_SUCCESS} from "../constants/counterConstant"

export const increaseCounter = () => {
	return {
		type: INCREMENT,
	};
};

export const decreaseCounter = () => {
	return {
		type: DECREMENT,
	};
};

export const getUsersList = () => {
	return {
		type: GET_USERS_LIST,
	};
};

export const getUsersListSuccess = (data) => {
	return {
		type: GET_USERS_LIST_SUCCESS,
    payload: data
	};
};