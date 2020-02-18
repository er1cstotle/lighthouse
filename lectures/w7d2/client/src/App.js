import React, {useState, useEffect} from 'react';
import axios from "axios";

import './App.css';



function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('/data-1').then((res) => {
      console.log(res);
      setMessage(res.data.message)
    })

  }, [])


  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
