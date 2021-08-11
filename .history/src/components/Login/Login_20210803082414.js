import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import { Button } from '@material-ui/core';
//CSS
import './Login.css';
//FILES

const styles = {
  button: {
    background: "#006699",
    color: "#fff",
  }
}
const Login = (props) => {
  const handleRegisterToApp = () => {

  };
  const handleLoginToApp = () => {

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
      <Button onClick={handleLoginToApp} variant="contained" style={styles.button}>Sign In</Button>
      <p>
        Not a member?
        <span className="login__register" onClick={handleRegisterToApp}>Register Now</span>
      </p>
      </form>
    </section>
  )
}

export default Login
