import React from "react";
import Slide from "./component/Slide.js";
import "./index.css";

const App = () => {
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <div class='glitch-wrapper'>
            <div class='glitch'>
              Our Reviews<div className='underline'></div>
            </div>
          </div>
          <Slide />
        </div>
      </div>
    </main>
  );
};

export default App;
