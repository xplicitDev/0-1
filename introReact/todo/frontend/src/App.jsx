import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./componenets/CreateTodo";
import { Todos } from "./componenets/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
