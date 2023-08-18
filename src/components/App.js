
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [option, setOption] = useState("");

  function optionSet(e) {
    setOption(e.target.textContent)
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div>
        <h2>Child Component 1</h2>
        <button onClick={optionSet}>Option 1</button>
      </div>
      <div>
        <h2>Child Component 2</h2>
        <button onClick={optionSet}>Option 2</button>
      </div>
      <p>Selected Option: {option}</p>
    </div>
  )
}

export default App
