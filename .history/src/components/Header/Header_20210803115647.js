import React from 'react';
//COMPONENTS
import { HeaderOption } from './../'
//REDUX
import { useDispatch } from 'react-redux';
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
          onClick={}
          avatar="https://yt3.ggpht.com/yti/APfAmoHq3yfx7MM3-no_di9nNmmYCjliKpDuGd-4_kwuCw=s88-c-k-c0x00ffffff-no-rj-mo" title="Me" />
      </div>
    </header>
  )
}

export default Header
