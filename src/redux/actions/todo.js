import ActionTypes from "../types/index";
import axios from "axios";

const addTodo = (todo) => {
  return { type: ActionTypes.todo.ADD_TODO, payload: todo };
};

const setTodos = () => {
  return async function (dispatch) {
    const {data}  = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("~ data", data);
    dispatch({ type: ActionTypes.todo.SET_TODOS, payload: data });
  };
};

const todo = {
  addTodo,
  setTodos,
};

export default todo;
