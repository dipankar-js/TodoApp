import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoForm() {
  const { todos, addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="card card-body my-3 form">
      <h3 className="text-center text-info"> Todo List App in ReactJS</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add your Todo"
          value={todo}
          required
          onChange={e => setTodo(e.target.value)}
        />
        <button className="btn btn-success btn-block mt-3">Add Todo</button>
      </form>
    </div>
  );
}
