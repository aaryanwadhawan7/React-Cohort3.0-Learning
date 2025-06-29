import React, {useState, useEffect} from 'react';

// App -> Component
function App() {
  return (
    <div>
       <Counter></Counter>
       <Timer></Timer>
    </div>
  )
}

function Counter () {
  const [count, setCount] = useState (0);

  // console.log("Re-rendering");

  function increaseCounter () {
    setCount(count+1);
  }

  function decreaseCounter () {
    setCount(count-1);
  }

  function resetCounter () {
    setCount(0);
  }

  // this component will return an JsXML
  return (
    <div>
      <span>{count}</span>
      <button onClick={increaseCounter}>Increase Count</button>
      <button onClick={decreaseCounter}>Decrease Count</button>
      <button onClick={resetCounter}>Reset Count</button>
    </div>
  )
}

// mounting, re-render, unmounting
function Timer () {
  const [timer, setTimer] = useState(0);

  // hooking into the lifecycle events of react
  useEffect(function () {
    console.log('Timer mounted');

    const intervalId = setInterval((timer) => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Timer unmounted");
    }
  }, [])

  function resetTimer () {
    setTimer(0);
  }

  return (
    <div>
      <span>{timer}</span>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  )
}

// React will triggers re-rendering Timer Component whenever there is change in state of the Component.
// Everytime there is change in state React will re-rnder the counter component.
// This will effect the functioning of setInterval() fn.

export default App
