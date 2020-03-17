import React, {useState, useEffect} from 'react';
import axios from "axios";

import './App.css';



function App() {
  useEffect(() => {
    axios.get('/data-1').then((res) => {
      console.log(res);
    })

  }, [])

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
