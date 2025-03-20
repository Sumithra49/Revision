import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timerid = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerid);
  }, [count]);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
