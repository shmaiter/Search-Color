import React from "react";

const ColorBox = ({ colorName, hexValue, isDarkText }) => {
  return (
    <div
      className="squareColor"
      style={{
        backgroundColor: colorName,
        color: isDarkText ? "black" : "white",
      }}
    >
      <p>{colorName ? colorName : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorBox;
