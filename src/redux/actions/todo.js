import ActionTypes from "../types/index";
import axios from "axios";

const addTodo = (todo) => {
  return { type: ActionTypes.todo.ADD_TODO, payload: todo };
};

const setTodos = async () => {
  const { data } = axios.get("https://jsonplaceholder.typicode.com/todos");
  return { type: ActionTypes.todo.SET_TODOS, payload: data };
};

const todo = {
  addTodo,
  setTodos,
};

export default todo;
