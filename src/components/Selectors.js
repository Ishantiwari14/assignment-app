import React from "react";

export default function Selectors({ setShape, options, setColor, colors }) {
  return (
    <div className="selectors">
      <label htmlFor="color">Change Color: </label>
      <select
        defaultValue={""}
        name="shape"
        onChange={(ev) => setShape(ev.target.value)}
      >
        <option value="" disabled>
          Choose Shape
        </option>
        {options.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <select
        defaultValue={""}
        name="color"
        onChange={(ev) => setColor(ev.target.value)}
      >
        <option value="" disabled>
          Choose Color
        </option>
        {colors.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
}
