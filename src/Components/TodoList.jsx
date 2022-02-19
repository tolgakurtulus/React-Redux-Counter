import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

export const TodoList = () => {
  const [val, setVal] = useState("");
  const todo = useSelector((state) => state.todo);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      dispatch(Actions.todo.setTodos());
    };
    getTodos();
  }, [dispatch]);

  return (
    <div>
      <input onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => dispatch(Actions.todo.addTodo(val))}>
        Add to do
      </button>
      <ul>
        {todo &&
          todo.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
      <ul>
        {todos &&
          todos.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};
