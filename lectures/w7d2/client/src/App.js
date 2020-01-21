import React, {useState, useEffect} from 'react';
import Axios from "axios";
import './App.css';


function App() {
  const [message, setMessage] = useState('Hello World')
  
  useEffect(() => {
    document.title = 'blahhh'
  })

  useEffect(() => {
    Axios.get('/data-1').then((res) => {
      console.log(res.data);
    })
  })
  
  useEffect(() => {
    document.getElementById("message").innerHTML = "Paragraph changed!";
  })
  
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count]);



  return (
    <div className="App">
      <p id="message">{message}</p>
    </div>
  );
}

export default App;
