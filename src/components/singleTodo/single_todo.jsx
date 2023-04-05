import React from "react";
import "./singleTodo.css";

const SingleTodo = ({ t, handleDelete }) => {
  return (
    <div className="todo-container">
      <li className="singleTodo">
        <span className="todoText" key={t.id}>
          {t.todo}
        </span>
        <button>Edit</button>
        <button onClick={() => handleDelete(t.id)}>Delete</button>
      </li>
    </div>
  );
};

export default SingleTodo;
