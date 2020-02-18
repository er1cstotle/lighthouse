import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  document.title = 'hiiiiiii'

  useEffect(() => {
    document.getElementById('hello').innerHTML = 'hola mundo'
  })

  return (
    <div className="App">
      <p id={'hello'}>hello world</p>
    </div>
  );
}

export default App;
