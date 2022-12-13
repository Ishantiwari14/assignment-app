import React, { useState } from "react";

function App() {
  const [shape, setShape] = useState("")
  const [color, setColor] = useState("")


  // setColorOfShapes({
  //   'left-rectangle':'black',
  //   'mid-rectangle':'black',
  //   'right-rectangle':'black',
  //   'left-circle':'black',
  //   'mid-circle':'black',
  //   'right-circle':'black',
  // })
  
  // const updateColor = () => {
  //   colorOfShapes[shape] = color
  //   setColorOfShapes(colorOfShapes)
  // }

  // updateColor()
 return (
  <div className="container">
    <div className="shapes">
        
        <div className="left-rectangle" style={{
          backgroundColor: colorOfShapes['left-rectangle']
        }}></div>
        <div className="mid-rectangle" style={{
          backgroundColor: colorOfShapes['mid-rectangle']
        }}></div>
        <div className="right-rectangle" style={{
          backgroundColor: colorOfShapes['right-rectangle']
        }}></div>
        <div className="left-circle circle" style={{
          backgroundColor: colorOfShapes['left-circle']
        }}></div>
        <div className="mid-circle circle" style={{
          backgroundColor: colorOfShapes['mid-circle']
        }}></div>
        <div className="right-circle circle" style={{
          backgroundColor: colorOfShapes['right-circle']
        }}></div>
    </div>
    
    <div className="selectors">
      <label for="color">Change Color: </label>
      <select name="shape" onChange={(ev) => setShape(ev.target.value)}>
        <option value="" selected>Choose Shape</option>
        <option value="left-rectangle">Left Rectangle</option>
        <option value="mid-rectangle">Middle Rectangle</option>
        <option value="right-rectangle">Right Rectangle</option>
        <option value="left-circle">Left Circle</option>
        <option value="mid-circle">Middle Circle</option>
        <option value="right-circle">Right Circle</option>
      </select>
      <select name="color" onChange={(ev) => setColor(ev.target.value)}>
        <option value="" selected>Choose Color</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
    </div>

  </div> 
 )
}

export default App;
