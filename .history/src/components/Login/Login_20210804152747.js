import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero } from './Login.css';
//FILES
import logo from './../../assets/images/linkedIn.png';
import logo-hero from './../../assets/images/linkedin-strona-startowa.png';

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
      <Section>
        <Hero>
          <h1>Welkom to your professional community</h1>
          <img src={logo-hero} alt="logo-hero" />
        </Hero>
      </Section>
    </Container>
  )
}

export default Login
