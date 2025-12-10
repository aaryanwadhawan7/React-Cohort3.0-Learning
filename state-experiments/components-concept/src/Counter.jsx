// Custom Hooks
import { useState } from "react";

function useCounter() {
  // encapsulate all stateful component logic
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((cnt) => cnt + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

export function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Counter {count}</button>
    </div>
  );
}


