import React from "react";

export default function Shapes({ colorOfShapes }) {
  return (
    <div className="shapes">
      <div className="rectangles">
        <div
          className="left-rectangle"
          style={{
            backgroundColor: colorOfShapes.leftRectangle,
          }}
        ></div>
        <div
          className="mid-rectangle"
          style={{
            backgroundColor: colorOfShapes.midRectangle,
          }}
        ></div>
        <div
          className="right-rectangle"
          style={{
            backgroundColor: colorOfShapes.rightRectangle,
          }}
        ></div>
      </div>
      <div className="circles">
        <div
          className="left-circle circle"
          style={{
            backgroundColor: colorOfShapes.leftCircle,
          }}
        ></div>
        <div
          className="mid-circle circle"
          style={{
            backgroundColor: colorOfShapes.midCircle,
          }}
        ></div>
        <div
          className="right-circle circle"
          style={{
            backgroundColor: colorOfShapes.rightCircle,
          }}
        ></div>
      </div>
    </div>
  );
}
