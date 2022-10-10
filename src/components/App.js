import React from "react";
import "../styles/App.css";
const App = () => {
  const handleDoubleClick = (event) => {
    console.log("I was double clicked");
  };

  const handleClick = () => {
    console.log("I was not double clicked");
  };
  return (
    <div id="main">
      <button
        id="dblclick-btn"
        onDoubleClick={(e) => {
          handleDoubleClick(e);
        }}
        onClick={() => {
          handleClick();
        }}
      >
        Double click me
      </button>
    </div>
  );
};


export default App;
