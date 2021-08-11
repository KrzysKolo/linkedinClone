import React, { useState } from 'react';
//COMPONENTS
//ROUTING
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
//REDUX
import { selectUser, setUserLogin, setUserLogout } from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
//FIREBASE
import { providerGoogle, auth } from '../../firebase/confing';
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
//CSS
import { Container, Content, Logo, Search, Nav, NavList, User, Work, SignOut, UserProfile } from './Header.css';
//FILES
import logo from './../../assets/images/logo-linkedin.png';
import userImg from './../../assets/images/user.png';
import dropDown from './../../assets/images/2770063831540882612.svg';
import work from './../../assets/images/work.png';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const user = useSelector(selectUser);

  const showSignOut = () => {
    setShow(prev=>!prev);
  };

  const signOut = () => {
    auth.signOut()
    .then(() => {
			dispatch(setUserLogout())
			history.push('/')
		})
  }

  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to={'/home'} className="navlink">
            <img src={logo} alt="logo linkedin" />
          </NavLink>
        </Logo>
        <Search>
          <div>
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </Search>
        <Nav>
          <NavList >
            <NavLink to={'/home'} className="navlink">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </NavList>
          <NavList >
            <NavLink to={'/mynetwork'} className="navlink">
              <SupervisorAccountIcon  />
              <span>My Network</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to={'/jobs'} className="navlink">
              <BusinessCenterIcon  />
              <span>Jobs</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to={'/messaging'} className="navlink">
              <ChatIcon />
              <span>Messaging</span>
            </NavLink>
          </NavList>
          <NavList>
            <NavLink to={'/notifications'} className="navlink">
              <NotificationsIcon />
              <span>Notifications</span>
            </NavLink>
          </NavList>
          <User onClick={showSignOut}>
            <a className="navlink">
            {user.photo
              ? <img src={user.photo} alt="user" />
              : <img src={userImg} alt="user" />
            }
              <span>
                Me
                <img src={dropDown} alt=""  />
              </span>
            </a>


          </User>
          <Work>
            <NavLink to={'/work'} className="navlink">
            <img src={work} alt="" />
            <span>
              Work
              <img src={dropDown} alt="" />
            </span>
            </NavLink>
          </Work>
        </Nav>
        { show &&
              <SignOut>
                <a>
                  <img src={user.photo} alt="user" />
                  <span>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                  </span>
                  <p>sasasa</p>
                </a>
                <a onClick={signOut }>Sign Out</a>
              </SignOut>
            }
      </Content>
    </Container>
  )
}

export default Header
