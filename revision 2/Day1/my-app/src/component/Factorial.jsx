// import React, { useMemo, useState } from "react";

// function FactorialCalculator() {
//   const [number, setNumber] = useState(1);

//   // Memoize factorial calculation
//   const factorial = useMemo(() => {
//     console.log("Calculating factorial...");
//     const calcFactorial = (n) => {
//       if (n <= 1) return 1;
//       return n * calcFactorial(n - 1);
//     };
//     return calcFactorial(number);
//   }, [number]); // Recalculate only when `number` changes

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Factorial Calculator</h2>
//       <input
//         type="number"
//         value={number}
//         min="0"
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//         style={{ padding: "8px", fontSize: "16px" }}
//       />
//       <p>Factorial: {factorial}</p>
//     </div>
//   );
// }

// export default FactorialCalculator;
import { useMemo, useRef, useState } from "react";

const Memo = () => {
  const [no, setNo] = useState(100);
  const [flag, setFlag] = useState(true);
  const refV = useRef();

  // Factorial calculation function
  function Factorial(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
      ans *= i;
    }
    return ans;
  }

  // Memoizing the result of Factorial computation based on 'no'
  const value = useMemo(() => Factorial(no), [no]);

  // Handle button click to update the 'no' value from the input
  function handleClick() {
    setNo(refV.current.value);  // Set the value to state
    refV.current.value = "";
  }

  return (
    <>
      <h3>
        Factorial of {no} is: {value}
      </h3>
      <input type="number" placeholder="Enter a number" ref={refV} />
      <button onClick={handleClick}>Calculate Factorial</button>
      <button onClick={() => setFlag(!flag)}>Toggle: {flag.toString()}</button>
    </>
  );
};

export default Memo;
