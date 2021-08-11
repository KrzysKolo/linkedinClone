import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import { Button } from '@material-ui/core';
//CSS
import './Login.css';
//FILES

const Login = (props) => {
  const handleRegisterApp = () => {

  };
  const handleLoginApp = () => {

  }
  return (
    <section className="login">
      <img
        src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG30.png"
        alt="Logo" />
      <form>
        <input
          placeholder="Full name (required if reqisttering)"
          type="text" />
        <input
          placeholder="Email"
          type="text" />
        <input
          placeholder="Password"
          type="password" />
      <Button onClick={handleLoginApp}>Sign In</Button>
      <p>
        Not a member?
        <span className="login__register" onClick={handleRegisterApp}>Register Now</span>
      </p>
      </form>
    </section>
  )
}

export default Login
