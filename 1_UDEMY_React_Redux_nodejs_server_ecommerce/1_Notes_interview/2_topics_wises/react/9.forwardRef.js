1;//
import React, { forwardRef } from 'react';

// Define a FancyButton component that forwards the ref to the button element
const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="fancy-button">
    {props.children}
  </button>
));

export default FancyButton;


2;//

import React, { useRef } from 'react';
import FancyButton from './FancyButton';

function App() {
  // Create a ref to store the reference to the FancyButton component
  const buttonRef = useRef(null);

  // Function to handle the click event and focus the FancyButton
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.focus(); // Focus the button
      console.log(buttonRef.current); // Log the button element
    }
  };

  return (
    <div>
      {/* Pass the ref to the FancyButton component */}
      <FancyButton ref={buttonRef}>Click Me!</FancyButton>
      {/* Button to trigger the handleClick function */}
      <button onClick={handleClick}>Focus the Fancy Button</button>
    </div>
  );
}

export default App;
