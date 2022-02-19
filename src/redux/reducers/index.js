import count from "./count";
import todo from "./todo";
import todos from "./todos";
import user from "./user";
import { combineReducers } from "redux";

const reducers = combineReducers({
  count,
  todo,
  todos,
  user,
});

export default reducers;
