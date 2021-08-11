import React, { useEffect, useState } from 'react';
//COMPONENTS
//ROUTING
import { useHistory } from 'react-router';
//REDUX
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLogin, setUserLogout } from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
//FIREBASE
import { provider, auth } from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Input, Email, TextField, Span } from './Register.css';
//FILES

import logoEmail from '../../assets/images/logo-email.png';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
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

  return (
    <>
         <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
             />
          <Input
            type="text"
            placeholder="Profile pic URL (optional)"
            value={photoURL}
            onChange={e => setPassword(e.target.value)}
            />
         <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
             />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          <Email>
            <img src={logoEmail} alt="logo google" />
            Register and Sign in with Email
          </Email>

    </>
  )
}

export default Register
