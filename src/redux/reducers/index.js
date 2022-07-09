import { combineReducers } from "redux";
import counterReducer from './conterReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export default rootReducer;