import React from 'react';
//COMPONENTS
import { HeaderOption } from './../'
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
//FIREBASE
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
//CSS
import './Header.css';
import { auth } from '../../firebase/confing';
//FILES

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <header>
      <div className="header__left">
        <img src="https://library.kissclipart.com/20181124/fhw/kissclipart-linkedin-icon-png-clipart-social-media-computer-ic-3cbd5e26a934ea16.jpg" alt="linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          onClick={logoutOfApp}
          avatar={user.photoURL} title="Me" />
      </div>
    </header>
  )
}

export default Header
