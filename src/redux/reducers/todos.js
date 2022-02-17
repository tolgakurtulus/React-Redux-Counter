import ActionTypes from "../types/index";

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.todo.SET_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default todos;
