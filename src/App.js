import React, { useEffect, useState } from "react";
import Shapes from "./components/Shapes";
import Selectors from "./components/Selectors";

function App() {
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("");
  const [colorOfShapes, setcolorOfShapes] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem("lastState"));
    return (
      savedState || {
        leftRectangle: "",
        midRectangle: "",
        rightRectangle: "",
        leftCircle: "",
        midCircle: "",
        rightCircle: "",
      }
    );
  });

  const changeShapeColor = (shape, color) => {
    setcolorOfShapes((prev) => {
      return { ...prev, [shape]: color };
    });
    // setShape("");
    // setColor("");
  };

  localStorage.setItem("lastState", JSON.stringify(colorOfShapes));

  useEffect(() => {
    if (shape && color) {
      changeShapeColor(shape, color);
    }
  }, [shape, color]);

  const options = [
    "leftRectangle",
    "midRectangle",
    "rightRectangle",
    "leftCircle",
    "midCircle",
    "rightCircle",
  ];

  const colors = [
    "purple",
    "blue",
    "green",
    "red",
    "pink",
    "skyblue",
    "beige",
    "violet",
  ];
  return (
    <div className="container">
      <Shapes colorOfShapes={colorOfShapes} />
      <Selectors
        setShape={setShape}
        setColor={setColor}
        options={options}
        colors={colors}
      />
    </div>
  );
}

export default App;
