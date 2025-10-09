import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header title="Masood1"></Header>
        <Header title="Masood2"></Header>
      </div>
    </>
  );
}

function Header({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}
export default App;
