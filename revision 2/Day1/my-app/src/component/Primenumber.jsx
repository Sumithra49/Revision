import { useMemo, useRef, useState } from "react";

const PrimeCheck = () => {
  const [num, setNum] = useState(2);
  const refV = useRef();

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const primeResult = useMemo(() => {
    const number = parseInt(num);
    return isPrime(number) ? `${number} is prime!` : `${number} is not prime.`;
  }, [num]);

  function handleClick() {
    setNum(refV.current.value);     // No condition, just set
    refV.current.value = "";        // Clear input
  }

  return (
    <>
      <h3>{primeResult}</h3>
      <input type="number" ref={refV} placeholder="Enter a number" />
      <button onClick={handleClick}>Check Prime</button>
    </>
  );
};

export default PrimeCheck;
