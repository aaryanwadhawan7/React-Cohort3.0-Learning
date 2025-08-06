// Context API -> Context, Provider and Conumer

import { useState, createContext, useContext, Children } from "react";
import { Counter } from "./Counter";
import { usePostTitle } from "./hooks/usePostTitle";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbState, setBulbState] = useState(false);

  return (
    <BulbContext.Provider value={{ bulbState, setBulbState }}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  const [postNo, setCurretPostNo] = useState(1);
  const postTitle = usePostTitle();
  const [state, setState] = useState (0);
  const prev = usePrev (state);

  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + postNo
  );

  // before component re-renders we need to add loading logic to codebase
  if (loading) {
    return (
      <div>
        <span
          style={{
            color: "beige",
            fontSize: 30,
            margin: 10,
            padding: 10,
          }}
        >
          Loading...
        </span>
      </div>
    );
  }


  return (
    <div>
      <BulbProvider>
        <Bulb />
      </BulbProvider>
      <Counter></Counter>
      <span
        style={{
          color: "beige",
          fontSize: 30,
          margin: 10,
          padding: 10,
        }}
      >
        {postTitle.title}
      </span>
      <div
        style={{
          color: "beige",
          fontSize: 30,
          margin: 10,
          padding: 10,
        }}
      >
        {JSON.stringify(finalData)}
      </div>

      <div>
        <button onClick={() => setCurretPostNo(1)}>Post 1</button>
        <button onClick={() => setCurretPostNo(2)}>Post 2</button>
        <button onClick={() => setCurretPostNo(3)}>Post 3</button>
        <div style={{ color: "beige" }}>{JSON.stringify(finalData)}</div>
      </div>

      <div>
        <p style={{color : "whitesmoke"}}>{state}</p>
        <button onClick={() => {
          setState((curr) => curr + 1);
        }}>Click Me</button>
        <p style={{color : "whitesmoke"}}>The prev val was {prev != undefined ? prev : "N/A"}</p>
      </div>
    </div>
  );
}

function Bulb() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbState } = useContext(BulbContext);
  const val = bulbState ? "Bulb is ON!" : "Bulb is OFF!";

  const spanStyle = {
    backgroundColor: bulbState ? "yellow" : "gray",
    color: bulbState ? "black" : "white",
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold",
    display: "inline-block",
    margin: 10,
    minWidth: 100,
    textAlign: "center",
  };

  return (
    <span id="switch" style={spanStyle}>
      {val}
    </span>
  );
}

const style = {
  backgroundColor: "#1f1f1f",
  color: "white",
  fontWeight: "bolder",
  margin: 10,
  padding: 10,
  borderRadius: 10,
};

function LightSwitch() {
  const { setBulbState } = useContext(BulbContext);

  function toggle() {
    setBulbState((prev) => !prev);
  }

  return (
    <button onClick={toggle} style={style}>
      ON/OFF
    </button>
  );
}

export default App;
