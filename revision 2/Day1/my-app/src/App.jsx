// import React, { useState } from "react";
// import AddFruit from "./component/AddFruit";
// import FruitList from "./component/FruitList";

// const App = () => {
//   const [fruits, setFruits] = useState(["apple", "banana", "orange"]);

//   return (
//     <div>
//       <h2>Fruit App</h2>
//       <AddFruit setFruits={setFruits} />
//       <FruitList fruits={fruits} />
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useRef } from 'react';

import Memo from './component/Factorial';
import Fibonacci from './component/Fibonacci';
import PrimeCheck from './component/primenumber';

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-focus on page load
  }, []);

  const handleClick = () => {
    inputRef.current?.focus(); // Focus on button click
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Focus Input Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <br /><br />
      <button onClick={handleClick} style={{ padding: '8px 16px' }}>
        Focus Input
      </button>
      
      <Memo/>
      <PrimeCheck/>
      <Fibonacci/>
    </div>
  );
};

export default App;
