import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContextProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
