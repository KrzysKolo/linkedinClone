import React, { useEffect, useState } from 'react';
//COMPONENTS
//ROUTING
//REDUX
import { useDispatch, useSelector } from 'react-redux';
//FIREBASE
//MATERIAL UI
//CSS
import { Input, Email, TextField, Span } from './Register.css';
//FILES

import logoEmail from '../../assets/images/logo-email.png';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [picURL, setPicURL] = useState('');
  const dispatch = useDispatch();

  return (
    <>
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
            Sign in with Email
          </Email>
          <TextField>
            Not a member?
            : <Span>Register Now</Span>
          </TextField>
    </>
  )
}

export default Register
