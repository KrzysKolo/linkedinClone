import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn } from './Login.css';
//FILES
import logo from './../../assets/images/linkedIn.png';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <Join>
            Join Now
          </Join>
          <SignIn>
            Sign In
          </SignIn>
        </div>
      </Nav>
    </Container>
  )
}

export default Login
