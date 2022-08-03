import React from "react";
import colorNames from "colornames";

const SearchColor = ({
  colorName,
  setColorName,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        value={colorName}
        onChange={(e) => {
          setColorName(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default SearchColor;
