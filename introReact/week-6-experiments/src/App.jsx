import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <Todos
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}

function Todos({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}
export default App;

// ---Wrapper---

// function App() {
//   return (
//     <>
//       <CardWrapper>Hi There!</CardWrapper>
//       <CardWrapper>Hi There Again!</CardWrapper>
//       <CardWrapper>
//         <CardWrapper>Hi There Again & Again!!</CardWrapper>
//       </CardWrapper>
//     </>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "3px solid black", padding: 20 }}>{children}</div>
//   );
// }
