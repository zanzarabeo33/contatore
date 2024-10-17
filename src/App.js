import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    return setCount(count + 1);
  }

  function decrease() {
    return setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Incrementa + 1</button>
      <button onClick={decrease}>Decrementa - 1</button>
      <button onClick={reset}>RESET / CLEAR</button>
    </div>
  );
}

export default App;
