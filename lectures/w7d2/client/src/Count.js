import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Eric')

  const incrementCount = () => {
    setCount(count + 1)
  }

  const changeNameToBob = () => {
    setName('Bob')
  }

  useEffect(() => {
    console.log('name change');
  }, [name])


  useEffect(() => {
    console.log('count change');
  }, [count])

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <p>{name}</p>
      <button onClick={changeNameToBob}>Change Name to Bob</button>
    </div>
  );
}

export default App;
