/*
A pure functional component in React is a stateless function that takes props as input and returns
JSX to describe what the UI should look like. Since it only relies on the props
it receives and does not use or change any external state or side effects, it is considered "pure."
*/

import React from "react";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default Greeting;
