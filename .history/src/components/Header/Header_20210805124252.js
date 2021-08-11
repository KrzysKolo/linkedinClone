import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
//CSS
import { Container, Content, Logo, Search, Nav } from './Header.css';
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
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </Search>
        <Nav>
          <a>
            <HomeIcon />
            <span>Home</span>
          </a>
          <a>
            <SupervisorAccountIcon  />
            <span>My Network</span>
          </a>
          <a>
            <BusinessCenterIcon  />
            <span>Jobs</span>
          </a>
          <a>
            <ChatIcon />
            <span>Messaging</span>
          </a>
          <a>
            <NotificationsIcon />
            <span>Notifications</span>
          </a>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header
