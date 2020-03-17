import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [pizzaToppings, setPizzaToppings] = useState(['cheese', 'pineapple', 'ham'])

  const addBacon = () => {
    setPizzaToppings([...pizzaToppings, 'bacon'])
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 2000);
  }

  return (
    <div className="App">
      <div>
        {pizzaToppings.map((topping) => (
          <p>{topping}</p>
        ))}
      </div>
      <button onClick={addBacon}>add Bacon for $3.50</button>
    </div>
  );
}

export default App;
