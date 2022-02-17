import ActionTypes from "../types/index";

const increaseCount = (val) => {
  return { type: ActionTypes.counter.INREASE_COUNTER, payload: val };
};

const decreaseCount = (val) => {
  return { type: ActionTypes.counter.DECREASE_COUNTER, payload: val };
};

const count = {
  increaseCount,
  decreaseCount,
};

export default count;
