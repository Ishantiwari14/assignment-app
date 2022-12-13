import React, { useState,useEffect } from "react";

function App() {
  const [shape, setshape] = useState("")
  const [color, setColor] = useState("")
  const [colorOfShapes,setcolorOfShapes] = useState([])
  const changeShapeColor = (shape,color) => {
    const newcolorOfShapes = colorOfShapes.filter((ele) => ele.shape !== shape )
    setcolorOfShapes(newcolorOfShapes)
    setcolorOfShapes(prev => {
      return [
        ...prev,
        {
          shape: shape,
          color: color
        }
      ]
    })
    setColor('')
    setshape('')
  }
  
  useEffect(() => {
    if (shape && color) {
      changeShapeColor(shape, color)
    }
   
    
  },[shape,color]);

  
 return (
  <div className="container">
    <div className="shapes">
        <div className="rectangles">

        <div className="left-rectangle" style={{
          
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='left-rectangle'?ele.color:''
          })
        }}></div>
        <div className="mid-rectangle" style={{
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='mid-rectangle'?ele.color:''
          })
        }}></div>
        <div className="right-rectangle" style={{
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='right-rectangle'?ele.color:''
          })
        }}></div>
        </div>
        <div className="circles">

        <div className="left-circle circle" style={{
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='left-circle'?ele.color:''
          })
        }}></div>
        <div className="mid-circle circle" style={{
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='mid-circle'?ele.color:''
          })
        }}></div>
        <div className="right-circle circle" style={{
          backgroundColor: colorOfShapes.map((ele) => {
            return ele.shape==='right-circle'?ele.color:''
          })
        }}></div>
        </div>
    </div>
    
    <div className="selectors">
      <label for="color">Change Color: </label>
      <select name="shape" value={shape} onChange={(ev) => setshape(ev.target.value)}>
        <option value="" selected>Choose Shape</option>
        <option value="left-rectangle">Left Rectangle</option>
        <option value="mid-rectangle">Middle Rectangle</option>
        <option value="right-rectangle">Right Rectangle</option>
        <option value="left-circle">Left Circle</option>
        <option value="mid-circle">Middle Circle</option>
        <option value="right-circle">Right Circle</option>
      </select>
      <select name="color" value={color} onChange={(ev) => setColor(ev.target.value)}>
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
