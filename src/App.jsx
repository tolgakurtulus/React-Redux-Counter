import React from "react";
import { Counter } from "./Components/Counter";
import { UserList } from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App c-app">
      <header>
        <h1>Header</h1>
        <Counter />
        <UserList />
      </header>
    </div>
  );
}

export default App;
