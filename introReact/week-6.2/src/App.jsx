import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <button
        onClick={function () {
          setSelectedId(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setSelectedId(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setSelectedId(3);
        }}
      >
        3
      </button>

      <Todo id={selectedId} />
    </>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then(function (response) {
      setTodos(response.data.todos);
    });
  }, [id]);

  return (
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  );
}

export default App;
