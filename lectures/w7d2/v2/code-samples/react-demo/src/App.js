import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [pizzaToppings, setPizzaToppings] = useState(['pineapple', 'ham'])

  console.log('hello');
  

  const addFeta = () => {
    const newToppings = [...pizzaToppings]
  
    newToppings.push('feta')
    setPizzaToppings(newToppings)
  }

  const addMeatballs = () => {
    const newToppings = [...pizzaToppings]
  
    newToppings.push('meatballs')
    setPizzaToppings(newToppings)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setTimeout(() => {

      setCount((prev) => {
        return prev - 1
      })

    }, 2000);
  }


  return (
    <div className="App"> 
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {pizzaToppings.map((pizzaTopping) => (
        <h1 key={pizzaTopping}>{pizzaTopping}</h1>
      ))}

      <button onClick={addFeta}>addFeta</button>
      <button onClick={addMeatballs}>addMeatballs</button>

    </div>
  );
}



export default App;
