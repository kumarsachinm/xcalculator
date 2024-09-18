import React, { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
    setOutput("");
  };

  const calculate = () => {
    try {
      setOutput(eval(result).toString());
    } catch (err) {
      setOutput("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={result} readOnly />

      <br />
      {output && <p>{output}</p>}
      <div style={{ marginTop: "25px" }}>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <br />
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <br />
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <br />
        <button onClick={clear}>C</button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button onClick={calculate} id="result">
          =
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
