import ActionTypes from "../types/index";

const initialState = [];

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.todo.SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default user;
