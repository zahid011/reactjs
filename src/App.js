import React, { useState } from "react";

import "./app.css";
import SingleTodo from "./components/singleTodo/single_todo";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo-List</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>add</button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => (
            <SingleTodo t={t} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
