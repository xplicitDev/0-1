import { useState } from "react";
import "./App.css";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "hurry to gym fcker",
    },
    {
      id: 2,
      title: "take shower",
      description: "clean yourself fcker",
    },
    {
      id: 3,
      title: "have dinner",
      description: "eat good protien bruhh",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </>
  );
}
export default App;
