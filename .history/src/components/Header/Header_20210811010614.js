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
import { Container, Content, Logo, Search, Nav, NavList, User, Work, SignOut } from './Header.css';
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
          <NavList className="active">
            <NavLink to={'/Home'} className="navlink">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </NavList>
          <NavList >
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
          <User onClick={showSignOut}>
            <a>
            {user.photo
              ? <img src={user.photo} alt="user" />
              : <img src={userImg} alt="user" />
            }
              <span>
                Me

                <img src={dropDown} alt=""  />
              </span>
            </a>

            { show && <SignOut>
              <a onClick={signOut }>Sign Out</a>
            </SignOut>
            }
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
