import React from "react";
import "../App.css";

export default function TodoForm() {
  return (
    <div className="card card-body my-3 form">
      <h3 className="text-center text-info"> Todo List App in ReactJS</h3>
      <hr />
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Add your Todo"
        />
        <button className="btn btn-success btn-block mt-3">Add Todo</button>
      </form>
    </div>
  );
}
