import axios from "axios";
import { call, put } from "redux-saga/effects";
import Actions from "../actions/index";
import { takeLatest } from "redux-saga/effects";
import ActionTypes from "../types/index";

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    console.log("~ error", error);
  }
};

function* handleGetUser() {
  try {
    const response = yield call(fetchData);
    console.log("~ response", response)
    yield put(Actions.user.setUser(response));
  } catch (error) {
    console.log("~ error", error);
  }
}

export function* watchUser() {
  yield takeLatest(ActionTypes.user.GET_USER, handleGetUser);
}
