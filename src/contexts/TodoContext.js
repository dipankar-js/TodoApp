import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { todo }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
