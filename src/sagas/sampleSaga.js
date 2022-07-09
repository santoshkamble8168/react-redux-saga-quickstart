import { takeLatest, call, put } from "redux-saga/effects";
import API from "./api";
import {GET_USERS_LIST} from "../redux/constants/counterConstant"
import { getUsersListSuccess } from "../redux/actions/counterAction";

const getUsersList = async (payload) => {
  return await API.get("/users")
  .catch((err) => {
    console.log(err);
  });
}

function* getUsersListSaga(action){
  try {
    const response = yield call(getUsersList, action.payload);
    const { data, status } = response
    if (status === 200) {
      yield put(getUsersListSuccess(data));
    } else {
      console.log("Error on getUsersListSaga")
    }
  } catch (error) {
    console.log("Error:", error)
  }
}

export default function* authSagas() {
  yield takeLatest(GET_USERS_LIST, getUsersListSaga);
}
