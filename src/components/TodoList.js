import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="card card-body my-3 form">
      <h3 className="text-center text-info"> Things to do </h3>
      <hr />
      <ul className="list-group list-group-flush">
        {todos.map(todo => {
          return (
            <div className="row">
              <div className="col-md-6">
                <li className="list-group-item">{todo.todo}</li>
              </div>
              <div className="col-md-2">
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="card card-body my-3 form">
      <p className="text-center text-primary">
        Nothing left to do. Enjoy your day off !
      </p>
    </div>
  );
}
