import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
