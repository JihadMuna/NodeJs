import "./App.css";

function App() {
  return (
    <button
      onClick={() => {
        fetch("http://localhost:4141/message")
          .then((res) => res.text())
          .then((res) => {
            console.log("res", res);
          });
      }}
    >
      Click Me
    </button>
  );
}

export default App;
