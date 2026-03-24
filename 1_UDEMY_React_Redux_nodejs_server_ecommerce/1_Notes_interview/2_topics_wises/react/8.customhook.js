1; //useFetch.js:
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React

// Custom hook to fetch data from a given URL
const useFetch = (url) => {
  const [data, setData] = useState(null); // State to store the fetched data, initialized to null

  useEffect(() => {
    // Effect hook to fetch data when the component mounts or when the URL changes
    fetch(url)
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => setData(data)); // Set the fetched data in state
  }, [url]); // Dependency array includes the URL, so this effect runs when the URL changes

  return [data]; // Return the fetched data
};

export default useFetch; // Export the custom hook for use in other components



2; //index.js:
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import useFetch from "./useFetch"; // Import the custom hook

// Home component to display data
const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos"); // Use the custom hook to fetch data from the given URL

  return (
    <>
      {data && // Check if data is not null
        data.map((item) => { // Map over the data array
          return <p key={item.id}>{item.title}</p>; // Return a paragraph element for each item, using the item's id as the key
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element for rendering
root.render(<Home />); // Render the Home component inside the root element

