// create a parent component and inside
// it create 2 states -> data and flag ,
// share this data to child component by
// using prop-drilling .
// Now :
// - when you update the data state ,
// then both Parent and Child
// component should be re-rendered .
// - when you update the flag state , then
// only the parent component should be
// re-rendered and the child component
// should be memoized by that point by
// using useCallback and react.memo.
// Parent.jsx
import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Hello");
  const [flag, setFlag] = useState(true);

  console.log("Parent rendered");

  const handleDataChange = useCallback((newData) => {
    setData(newData);
  }, []);

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Parent Component</h2>
      <p>Flag: {flag.toString()}</p>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle Flag</button>
      <Child data={data} onDataChange={handleDataChange} />
    </div>
  );
};

export default Parent;
