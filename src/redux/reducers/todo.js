import ActionTypes from "../types/index";

const initialState = [];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.todo.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todo;
