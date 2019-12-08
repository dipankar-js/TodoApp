import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    console.log(localTodos);
    return localTodos ? JSON.parse(localTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = todo => {
    setTodos([...todos, { todo, id: uuid() }]);
  };

  const removeTodo = id => {
    console.log("Funtion called");
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
