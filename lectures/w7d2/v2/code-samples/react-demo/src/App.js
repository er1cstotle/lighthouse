import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setTimeout(() => {
      setCount(count - 1)
    }, 2000);
  }

  return (
    <div className="App">
      <p>{count}</p>

      <button onClick={increment}>
        increment
      </button>

      <button onClick={decrement}>
        decrement
      </button>

    </div>
  );
}

export default App;
