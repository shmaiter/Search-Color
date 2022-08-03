import { useState } from "react";
import SearchColor from "./SearchColor";
import ColorBox from "./ColorBox";

function App() {
  const [colorName, setColorName] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox
        colorName={colorName}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SearchColor
        colorName={colorName}
        setColorName={setColorName}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
