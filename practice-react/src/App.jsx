import React, {useState, useEffect} from 'react';

// App -> Component
// conditional rendering
function App() {
  const [timerVisible, settimerVisible] = useState(true);

  useEffect(function () {
    setInterval( () => {
      settimerVisible(prev = !prev);
    }, 5000)
  }, [])

  return (
    <>
    <div>
       <Counter></Counter>
       {timerVisible && <Timer></Timer>}
    </div>
    <div>
      <Bulb></Bulb>
    </div>
    </>
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
// dependency array, cleanup, fetch inside useEffect hook

// React will triggers re-rendering Timer Component whenever there is change in state of the Component.
// Everytime there is change in state React will re-rnder the counter component.
// This will effect the functioning of setInterval() fn.



// Rolling up the state, unoptimal re-renders
// As ur application grows u wil find that multiple components need access to the same state.
// Instead of duplicating state in each component, you can lift the state up to the Lowest Common Ancestor 
// allowing the common ancestor to manage it.

function BulbState ({currBulbState}) {

  const bulbStatus = (currBulbState) ? "Bulb is On!" : "Bulb is Off!";

  return (
    <>
      <span>{bulbStatus}</span>
    </>
  )
}


function ToggleBulb ({currBulbState, toggleBulbState}) { 

  function toggleStatus () {
    toggleBulbState (!currBulbState);

  }
  return (
    <button onClick={toggleStatus}>Toggle Bulb</button>
  )
}


function Bulb () {
  const [bulbState, setBulbState] = useState (true);
  return (
    <>
      <BulbState currBulbState = {bulbState}></BulbState>
      <ToggleBulb currBulbState = {bulbState} toggleBulbState = {setBulbState}></ToggleBulb>
    </>
  )
}

export default App;
