import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Logo } from './Header.css';
//FILES
import logo from './../../assets/images/linkedIn.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="logo linkedin" />
        </Logo>
      </Content>
    </Container>
  )
}

export default Header
