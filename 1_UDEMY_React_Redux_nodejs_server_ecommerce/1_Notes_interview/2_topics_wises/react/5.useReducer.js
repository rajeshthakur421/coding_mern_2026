import React, { useReducer } from 'react';

// Initial state for the reducer
const initialState = { count: 0 };

// Reducer function to manage state transitions
function reducer(state, action) {
  // Handle different action types to update the state
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Increment the count
    case 'decrement':
      return { count: state.count - 1 }; // Decrement the count
    case 'reset':
      return initialState; // Reset the count to initial state
    default:
      throw new Error('Unknown action type'); // Handle unknown actions
  }
}

function Counter() {
  // useReducer hook to manage state using the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {state.count}</p>
      {/* Dispatch actions to update the state */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;
