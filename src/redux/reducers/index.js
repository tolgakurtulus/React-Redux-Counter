import count from "./count";
import todo from "./todo";
import todos from "./todos";
import { combineReducers } from "redux";

const reducers = combineReducers({
  count,
  todo,
  todos,
});

export default reducers;
