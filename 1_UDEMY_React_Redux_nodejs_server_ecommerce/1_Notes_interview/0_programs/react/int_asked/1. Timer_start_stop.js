import React, { useState, useRef } from 'react';

function Timer() {
  // State variables
  const [seconds, setSeconds] = useState(0); // State to hold the number of seconds
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running
  const intervalRef = useRef(null); // Ref to hold the interval ID for clearing later

  // Function to start the timer
  const handleStart = () => {
    setIsRunning(true); // Set isRunning to true to indicate timer is running
    // Set interval to update seconds every 1000ms (1 second)
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1); // Increment seconds by 1
    }, 1000);
  };

  // Function to stop the timer
  const handleStop = () => {
    setIsRunning(false); // Set isRunning to false to stop the timer
    clearInterval(intervalRef.current); // Clear the interval using the intervalRef
  };

  // Function to reset the timer
  const handleReset = () => {
    setSeconds(0); // Reset seconds to 0
    clearInterval(intervalRef.current); // Clear the interval using the intervalRef
    setIsRunning(false); // Set isRunning to false to stop the timer
  };

  // JSX rendering
  return (
    <div>
      <h1>Timer: {seconds} seconds</h1> {/* Display the current timer value */}
      {/* Buttons to start, stop, and reset the timer */}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
