// Child.jsx
import React from "react";

const Child = React.memo(({ data, onDataChange }) => {
  console.log("Child rendered");

  return (
    <div style={{ border: "2px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <p>Data: {data}</p>
      <input
        type="text"
        value={data}
        onChange={(e) => onDataChange(e.target.value)}
      />
    </div>
  );
});

export default Child;
