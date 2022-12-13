import React, { useState } from "react";

function App() {
  const [shapeColor, setshapeColor] = useState([])

  const changeShapeColor = (ev) => {
    setshapeColor((prev) => {
      if (Object.keys(prev).map())
      return [
        ...prev,
        {[ev.target.name]: ev.target.value}
      ]
    })
  }
  
 return (
  <div className="container">
    <div className="shapes">
        
        <div className="left-rectangle" ></div>
        <div className="mid-rectangle" ></div>
        <div className="right-rectangle" ></div>
        <div className="left-circle circle" ></div>
        <div className="mid-circle circle" ></div>
        <div className="right-circle circle" ></div>
    </div>
    
    <div className="selectors">
      <label for="color">Change Color: </label>
      <select name="shape" onChange={(ev) => changeShape(ev)}>
        <option value="" selected>Choose Shape</option>
        <option value="left-rectangle">Left Rectangle</option>
        <option value="mid-rectangle">Middle Rectangle</option>
        <option value="right-rectangle">Right Rectangle</option>
        <option value="left-circle">Left Circle</option>
        <option value="mid-circle">Middle Circle</option>
        <option value="right-circle">Right Circle</option>
      </select>
      <select name="color" onChange={(ev) => changeColor(ev)}>
        <option value="" selected>Choose Color</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
        <option value="ping">Pink</option>
      </select>
    </div>
  
    
  </div> 
 )
}

export default App;
