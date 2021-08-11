import React from 'react';
//COMPONENTS
//ROUTING
import { Link } from 'react-router-dom';
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Nav, Join, SignIn, Section, Hero } from './FirstPage.css';
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
