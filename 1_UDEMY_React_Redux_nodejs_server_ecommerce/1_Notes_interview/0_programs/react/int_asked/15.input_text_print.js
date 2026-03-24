//usename and password show

import { useState } from "react"

export default function App(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <><h1>User name and password</h1>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

      <br />
      username: {username} <br />
      password: {password}
    </>
  )
}