import React, { useEffect, useState } from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Input, Email, TextField } from './Register.css';
//FILES

const Register = () => {
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
          <Email onClick={handleLoginToApp}>
            <img src={logoEmail} alt="logo google" />
            Sign in with Email
          </Email>
          <TextField>
            Not a member?
            : <Span onClick={showFormReg}>Register Now</Span>
          </TextField>
    </>
  )
}

export default Register
