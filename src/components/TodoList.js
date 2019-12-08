import React, { useContext } from "react";
import "../App.css";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos, removeTodo } = useContext(TodoContext);

  return todos.length ? (
    <div className="card card-body my-3 form">
      <h3 className="text-center text-info">{todos.length} Things to do</h3>
      <hr />
      <ul className="list-group list-group-flush">
        {todos.map(todo => {
          return (
            <div
              className="row shadow-sm p-1 mb-3 bg-white rounded"
              key={todo.id}
            >
              <div className="col-md-6">
                <li className="list-group-item">{todo.todo}</li>
              </div>
              <div className="col-md-2">
                <i
                  className="fa fa-trash-o delete"
                  onClick={() => removeTodo(todo.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="card card-body my-3 form">
      <h4 className="text-center text-info" style={{ fontFamily: "Solway" }}>
        Nothing left to do. Enjoy your day off !
      </h4>
    </div>
  );
}
