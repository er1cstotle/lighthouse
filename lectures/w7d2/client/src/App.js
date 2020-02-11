import React, {useState, useEffect} from 'react';
import './App.css';

function Rectangle() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(5)

  useEffect(() => {
    setTimeout(() => {
      debugger
      setLength(9)
    }, 1000);
  }, [])


  return (
    <div className="Rectangle">
      <p>length</p>
    </div>
  );
}

export default Rectangle;
