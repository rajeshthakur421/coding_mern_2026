import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");  // useState hook to manage the value of the input field.

  // useRef hook to create a mutable ref object that persists across renders.
  // The initial value is set to 0.
  const count = useRef(0);

  // useEffect hook to perform side-effects in function components.
  // This effect runs after every render (component mount and updates).
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}