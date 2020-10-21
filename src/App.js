import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [boxes, setBoxes] = useState([{ bg: "#777" }]) //initial box is grey, change it using below random

  useEffect(() => {
    //stop at fixed no of boxes? use the IF below
    //if(boxes.length < 21){
      const interval = setInterval (() => {
        setBoxes([...boxes, {bg: "#"+((Math.random() * 0xffffff) << 0).toString(16)}])
      }, 100)
      return () => clearInterval(interval)
    //}
  }, [boxes])
  return (
    <div className="app">
      {
        boxes.map((box, index) => (
          <div key = {index} className = "box" style = {{background: box.bg}}>
            <p>{index}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
