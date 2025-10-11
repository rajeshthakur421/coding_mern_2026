import React, { useState, useMemo } from 'react';

// Function to simulate an expensive calculation
function expensiveCalculation(num) {
  console.log('Calculating...');
  let result = 0;
  // Simulate a CPU-intensive task
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

function App() {
  // useState hook to manage the count state
  const [count, setCount] = useState(0);
  // useState hook to manage the input number
  const [number, setNumber] = useState(1);

  // useMemo to memoize the result of the expensive calculation
  // The expensive calculation is only re-executed when `number` changes
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      {/* Input field to change the number */}
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value, 10))} 
      />
      {/* Display the result of the expensive calculation */}
      <p>Calculated Value: {calculatedValue}</p>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      {/* Display the current count */}
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
