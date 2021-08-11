import React, { useEffect, useState } from 'react';
//COMPONENTS
//ROUTING
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
//REDUX
import { selectUser, setUserLogin } from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
//FIREBASE
import { provider, auth } from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero, Form, Google, Email, Input, TextField, Span } from './FirstPage.css';
//FILES
import logo from './../../assets/images/linkedIn.png';
import logoHero from './../../assets/images/linkedin-strona-startowa.png';

const FirstPage = (props) => {

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <Join>
            <Link to={'/signup'} className="link" >
              Join Now
            </Link>
          </Join>
          <SignIn >
            <Link to={'/login'} className="link">
              Sign In
            </Link>
          </SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welkom to your professional community</h1>
          <img src={logoHero} alt="logo-hero" />
        </Hero>
      </Section>
    </Container>
  )
}

export default FirstPage;
