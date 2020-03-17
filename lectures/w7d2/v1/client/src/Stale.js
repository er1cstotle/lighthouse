import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 100)
    }, 3000);
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
