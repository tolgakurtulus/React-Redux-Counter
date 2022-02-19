import { delay, put, takeLatest } from "redux-saga/effects";
import Actions from "../actions";
import ActioTypes from "../types";

function* handleIncrement(action) {
  yield delay(100);
  yield put(Actions.count.increaseCount(action.payload));
}
function* handleDecrement(action) {
  yield put(Actions.count.decreaseCount(action.payload));
}

export function* watchIncrement() {
    yield takeLatest(ActioTypes.count.ASYNC_INCREMENT, handleIncrement)
}
export function* watchDecrement() {
    yield takeLatest(ActioTypes.count.ASYNC_DECREMENT, handleDecrement)
}
