import ActionTypes from "../types/index";

const increaseCount = (val) => {
  return { type: ActionTypes.count.INREASE_COUNTER, payload: val };
};

const decreaseCount = (val) => {
  return { type: ActionTypes.count.DECREASE_COUNTER, payload: val };
};

const increaseAsyncCount = (val) => {
  return { type: ActionTypes.count.ASYNC_INCREMENT, payload: val };
};

const decreaseAsyncCount = (val) => {
  return { type: ActionTypes.count.ASYNC_DECREMENT, payload: val };
};

const count = {
  increaseCount,
  decreaseCount,
  increaseAsyncCount,
  decreaseAsyncCount,
};

export default count;
