import React, { useState, useEffect } from "react";
import { Counter } from "./Components/Counter";
import { TodoList } from "./Components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className="App c-app">
      <header>
        <h1>Header</h1>
        <Counter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
