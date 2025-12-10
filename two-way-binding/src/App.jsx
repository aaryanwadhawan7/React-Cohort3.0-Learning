import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitButton = (e) => {
    e.preventDefault();
    console.log(`Form is submitted by ${title}`);
    setTitle("");
  };

  // All intercation bw the user and frontend is being managed by React
  // Input val is being managed by title and setTitle manage the val of input
  // In this way, two-way binding exists...

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitButton(e);
        }}
      >
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
