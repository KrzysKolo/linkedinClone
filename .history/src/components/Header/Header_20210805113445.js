import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Logo, Search } from './Header.css';
//FILES
import logo from './../../assets/images/logo-linkedin.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={logo} alt="logo linkedin" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text"/>
          </div>
        </Search>
      </Content>
    </Container>
  )
}

export default Header
