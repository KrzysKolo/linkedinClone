import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google, Email, Input } from './Login.css';
//FILES
import logo from './../../assets/images/linkedIn.png';
import logoHero from './../../assets/images/linkedin-strona-startowa.png';
import logoGoogle from '../../assets/images/logo-google.png';
import logoEmail from '../../assets/images/logo-email.png';
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
          <img src={logoHero} alt="logo-hero" />
        </Hero>
        <Form>
          <Input type="email" placeholder="Enter email" />
          <Input type="password" placeholder="Enter password" />
          <Email>
            <img src={logoEmail} alt="logo google" />
            Sign in with Email
          </Email>
          <Google>
            <img src={logoGoogle} alt="logo google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

export default Login
