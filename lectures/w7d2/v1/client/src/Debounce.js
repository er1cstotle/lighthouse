import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    setTimeout(() => {
      console.log('debounced');
    }, 2000);
    
  }, [name])


  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
