import React, { useState } from "react";

const AddFruit = ({ setFruits }) => {
  const [newFruit, setNewFruit] = useState("");

  const handleAddFruit = () => {
    if (newFruit.trim() !== "") {
      setFruits(prevFruits => [...prevFruits, newFruit.trim()]);
      setNewFruit(""); // Clear input
    }
  };

  return (
    <div>
      <h3>Add a Fruit</h3>
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Enter a fruit"
      />
      <button onClick={handleAddFruit}>Add</button>
    </div>
  );
};

export default AddFruit;
