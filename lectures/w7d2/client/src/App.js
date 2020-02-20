import React, {useState, useEffect} from 'react';
import './App.css';

import axios from "axios";


function Rectangle() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(5)

  const calculateArea = () => length * width

  return (
    <div className="Rectangle">
      <p>{calculateArea()}</p>
    </div>
  );
}

export default Rectangle;
