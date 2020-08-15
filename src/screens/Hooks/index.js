import React, { useState } from "react";

// Component
import Input from "../../components/Input";

// CSS
import "./Hooks.css";

function Hooks() {
  const [greet] = useState("Hola mundo");
  const [activeButton, setActiveButton] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const handleClick = () => setActiveButton(!activeButton);
  const handleInputTest = (name, value) => setInputValue(value);
  /*

    1. Hacer que 2 botones incrementen/decrementen el valor de un estado
    y reflejarlo en la UI

    2. Hacer el CurrencyConverter con hooks

  */
  return (
    <div className="Container">
      <div className="Item">
        <h1>{greet}</h1>
      </div>
      <div className="Item">
        <button onClick={handleClick}>{activeButton ? "On" : "Off"}</button>
      </div>
      <div className="Item">
        <p>MXN ${inputValue * 21.5}</p>
        DLS: $
        <Input
          type="number"
          value={inputValue}
          name="Test"
          callback={handleInputTest}
        />
      </div>
    </div>
  );
}

export default Hooks;
