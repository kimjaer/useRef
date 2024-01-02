import React from 'react'
import './App.css'
import { useRef } from 'react'
function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;

    const passwordValue = passwordRef.current.value;
    console.log('Email:', emailValue);


    console.log('Password:', passwordValue);
  };

  return (
    <div className='form_member'>
      <form action="#none">
        <h2>User Login</h2>
        <ul>
          <li>
            <label htmlFor="email">
              Email
            </label><br />
            <input type="text" required name='email' />
          </li>
          <li>
            <label htmlFor="password">
              Password
            </label><br />
            <input type="password" name='password' required />
          </li>
        </ul>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App