/*Uncontrolled components in React are those where form data is handled by the DOM itself rather than being 
managed by the React state. The ref attribute is used to access the form values directly.*/

import React, { useRef } from 'react';

function UncontrolledForm() {
  // Create refs for form elements
  const nameRef = useRef();
  const emailRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const name = nameRef.current.value; // Access the value of the input using the ref
    const email = emailRef.current.value; // Access the value of the input using the ref
    alert(`Name: ${name}, Email: ${email}`); // Display the input values
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name input field */}
      <div>
        <label>
          Name:
          <input type="text" ref={nameRef} /> {/* Use ref to reference the input */}
        </label>
      </div>

      {/* Email input field */}
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} /> {/* Use ref to reference the input */}
        </label>
      </div>

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
