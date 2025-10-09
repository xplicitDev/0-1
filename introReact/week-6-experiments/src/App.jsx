import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <HeaderWithButton />
        <Header title="Masood2"></Header>
      </div>
    </>
  );
}

function HeaderWithButton() {
  const [name, setName] = useState("My name is Masood");

  function updateName() {
    setName("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateName}>Update the Name</button>
      <Header title={name}></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}
export default App;
