import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

//step 1
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    // Step 2: Provide the context value to the component tree.
    // UserContext.Provider makes the `user` value available to any nested components.
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component5 />      {/* Render Component5 which will consume the context value. */}
    </UserContext.Provider>
  );
}

function Component5() {
  // Step 3: Consume the context value using useContext.
  // This allows Component5 to access the `user` value provided by UserContext.Provider.
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component1;