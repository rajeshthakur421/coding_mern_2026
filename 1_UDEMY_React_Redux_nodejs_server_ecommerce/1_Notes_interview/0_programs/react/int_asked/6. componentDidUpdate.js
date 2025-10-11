//lifecycle of useEff1ect 

1; //componentDidMount:
useEffect(() => {
  // This code runs after the component mounts
  console.log("Component mounted");

  // Cleanup function (equivalent to componentWillUnmount)
  return () => {
    console.log("Component will unmount");
  };
}, []); // Empty dependency array means this effect runs only once after mount


2; //componentDidUpdate:
const [count, setCount] = useState(0);

useEffect(() => {
  // This code runs after every render
  console.log("Component updated");
}, [count]); // Only re-run the effect if count changes



3; //componentWillUnmount:
useEffect(() => {
  // This code runs after the component mounts
  console.log("Component mounted");

  // Cleanup function (equivalent to componentWillUnmount)
  return () => {
    console.log("Component will unmount");
  };
}, []); // Empty dependency array means this effect runs only once after mount
