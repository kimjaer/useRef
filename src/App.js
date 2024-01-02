import React, { useRef, useState } from 'react'
import './App.css'
function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailinfo, emailupdate] = useState("");
  const [pwinfo, pwinfoupdate] = useState("");
  return (
    <div className='form_member'>
      <form action="#none">
        <h2>User Login</h2>
        <ul>
          <li>
            <label htmlFor="email">
              Email
            </label><br />
            <input type="text" required name='email'
              value={emailinfo} ref={emailRef}
              onChange={(e) => {
                emailupdate(e.target.value);
                console.log(emailRef.current.value)
              }} />
          </li>
          <li>
            <label htmlFor="password">
              Password
            </label><br />
            <input type="password" name='password' value={pwinfo} required ref={passwordRef} onChange={(e) => { pwinfoupdate(e.target.value) }} />
          </li>
        </ul>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App