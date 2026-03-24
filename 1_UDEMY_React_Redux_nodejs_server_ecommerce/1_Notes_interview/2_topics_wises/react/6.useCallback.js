import React, { useState, useCallback } from 'react';

// Child component that receives a callback function to increment the counter
function IncrementButton({ increment }) {
  // Log to demonstrate when the button is re-rendered
  console.log('Button rendered');
  return <button onClick={increment}>Increment</button>;
}

function Counter() {
  // useState hook to manage the count state
  const [count, setCount] = useState(0);

  // useCallback hook to memoize the increment function
  // The increment function will only be re-created if the `count` value changes
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Pass the memoized increment function to the child component */}
      <IncrementButton increment={increment} />
    </div>
  );
}

export default Counter;
