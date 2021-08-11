import React, { useState } from 'react';
//COMPONENTS
//REDUX
import { useDispatch } from 'react-redux';
import { login } from './../../features/user/userSlice';
//FIREBASE
import { auth } from './../../firebase/confing';
//MATERIAL UI
import { Button } from '@material-ui/core';
//CSS
import './Register.css';
//FILES

const styles = {
  button: {
    background: "#006699",
    color: "#fff",
    marginTop: "15px",
    height: "50px"
  }
}

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picURL, setPicURL] = useState('');
  const dispatch = useDispatch();


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
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: picURL,
        }))
      })
    })
    .catch((error) => alert(error))
  };

  const handleLoginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login ({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      }))
    })
    .catch((error) => alert(error));
  };

  return (
    <section className="register">
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
          <span className="register__register" onClick={handleRegisterToApp}>Register Now</span>
        </p>
      </form>
    </section>
  )
}

export default Register
