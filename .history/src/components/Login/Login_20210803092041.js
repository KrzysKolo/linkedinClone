import React, { useState } from 'react';
//COMPONENTS
//REDUX
//FIREBASE
import { auth } from './../../firebase/confing';
//MATERIAL UI
import { Button } from '@material-ui/core';
//CSS
import './Login.css';
//FILES

const styles = {
  button: {
    background: "#006699",
    color: "#fff",
    marginTop: "15px",
    height: "50px"
  }
}
const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picURL, setPicURL] = useState('');


  const handleRegisterToApp = () => {
    if (!name) {
      return alert("Please enter a full name!")
    };
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: picURL,
      })
    })
  };
  const handleLoginToApp = (e) => {
    e.preventDefault();
    console.log("loguje")
  };

  return (
    <section className="login">
      <img
        src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG30.png"
        alt="Logo" />
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name (required if reqisttering)"
          type="text" />
        <input
          value={picURL}
          onChange={e => setPicURL(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text" />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="email" />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
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
