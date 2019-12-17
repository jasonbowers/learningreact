import React from "react";
import logo from "./cat.png";
import "./App.css";
import ItemName from "./Components/name.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Myles. I'm learning react and found a good way to publish dev
          builds of the front-end.
        </p>
        <p>The following text will be pulled from the CollegeSafe server:</p>
        <ItemName></ItemName>
      </header>
    </div>
  );
}

export default App;
