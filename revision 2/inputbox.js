import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); /
  }, []);

  const handleClick = () => {
    inputRef.current?.focus(); 
  };

  return (
    <div >
      <h2>Focus Input Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
       
      />
      <br />
      <br />
      <button onClick={handleClick} >
        Focus Input
      </button>
    </div>
  );
};

export default App;


//difference between onClick and onInput
//onInput is an event handler that fires every time the user modifies the input field, including every keystroke (just like onChange, but slightly lower-level and more immediate in some cases).

//ummary Table:
// Event	Triggered When...	Typical Use Case
// onChange	Value of input changes	Form inputs, typing, selecting
// onClick	Element is clicked	Buttons, toggles, triggering actions

w

