import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./componenets/CreateTodo";
import { Todos } from "./componenets/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
