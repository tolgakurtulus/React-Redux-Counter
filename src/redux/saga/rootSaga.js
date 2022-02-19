import { all, fork } from "redux-saga/effects";
import * as userSaga from "./userSaga";
import * as counterSaga from "./counterSaga";

// export function* rootSaga() {
//   yield all([
//     fork(userSaga.watchUser),
//     fork(counterSaga.watchIncrement),
//     fork(counterSaga.watchDecrement),
//   ]);
// }
export function* rootSaga() {
  yield all(
    [...Object.values(userSaga), ...Object.values(counterSaga)].map(fork)
  );
}
