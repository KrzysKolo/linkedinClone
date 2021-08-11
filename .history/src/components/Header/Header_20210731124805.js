import React from 'react';
//COMPONENTS
import { HeaderOption } from './../'
//REDUX
//FIREBASE
//CSS
import './Header.css';
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
//FILES

const Header = () => {
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
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
      </div>
    </header>
  )
}

export default Header
