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
      <button onClick={increase}>Incrementa +</button>
      <button onClick={decrease}>Incrementa -</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
