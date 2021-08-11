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

const Register = () => {
  return (
    <div>

    </div>
  )
}

export default Register
