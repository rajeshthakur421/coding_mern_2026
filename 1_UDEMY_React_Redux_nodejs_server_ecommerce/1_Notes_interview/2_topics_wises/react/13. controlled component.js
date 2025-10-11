/*A controlled component in React is a component that renders form elements and controls 
them by keeping the form data in the component's state.
 The component fully manages the form element's value and updates it based on user input.*/

import React, { useState } from "react";

function ControlledInput() {
  // Define a state variable to hold the input value
  const [name, setName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    alert(`Name submitted: ${name}`); // Show the submitted name in an alert
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for name */}
      <label>
        Name:
        <input
          type="text"
          value={name} // Bind the input value to the state variable 'name'
          onChange={(e) => setName(e.target.value)} // Update the state variable when the input changes
        />
      </label>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledInput;
