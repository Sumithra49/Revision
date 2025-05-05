import React, { useState } from "react";
import AddFruit from "./component/AddFruit";
import FruitList from "./component/FruitList";

const App = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);

  return (
    <div>
      <h2>Fruit App</h2>
      <AddFruit setFruits={setFruits} />
      <FruitList fruits={fruits} />
    </div>
  );
};

export default App;
