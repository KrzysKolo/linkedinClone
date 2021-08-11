import React from 'react';
//COMPONENTS
//ROUTING
import { Link } from 'react-router-dom';
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
import { Container, Content, Logo, Search, Nav, NavList, User, Work } from './Header.css';
//FILES
import logo from './../../assets/images/logo-linkedin.png';
import me from './../../assets/images/user.png';
import dropDown from './../../assets/images/2770063831540882612.svg';
import work from './../../assets/images/work.png';

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
          <NavList className="active">
            <a>
              <HomeIcon />
              <span>Home</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <SupervisorAccountIcon  />
              <span>My Network</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <BusinessCenterIcon  />
              <span>Jobs</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <ChatIcon />
              <span>Messaging</span>
            </a>
          </NavList>
          <NavList>
            <a>
              <NotificationsIcon />
              <span>Notifications</span>
            </a>
          </NavList>
          <User>
            <a>
              <img src={me} alt="user" />
              <span>
                Me
                <img src={dropDown} alt="" />
              </span>
            </a>
          </User>
          <Work>
          <a>
            <img src={work} alt="" />
            <span>
              Work
              <img src={dropDown} alt="" />
            </span>
            </a>
          </Work>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header
