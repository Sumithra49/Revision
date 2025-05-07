import { useMemo, useRef, useState } from "react";

const Fibonacci = () => {
  const [no, setNo] = useState(10); 
  const [flag, setFlag] = useState(true);
  const refV = useRef();

  // Fibonacci calculation function
  function Fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  // Memoizing the Fibonacci computation based on 'no'
  const value = useMemo(() => Fibonacci(no), [no]);

  // Handle button click to update the 'no' value from the input
  function handleClick() {
    setNo(refV.current.value);  // Set the value to state
    refV.current.value = ""; // Clear the input field after updating
  }

  return (
    <>
      <h3>
        Fibonacci of {no} is: {value}
      </h3>
      <input type="number" placeholder="Enter a number" ref={refV} />
      <button onClick={handleClick}>Calculate Fibonacci</button>
      <button onClick={() => setFlag(!flag)}>Toggle: {flag.toString()}</button>
    </>
  );
};

export default Fibonacci;
