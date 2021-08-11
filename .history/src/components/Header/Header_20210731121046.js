import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
import './Header.css';
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//FILES

const Header = () => {
  return (
    <div>
      <h3>This is a Header</h3>
      <div className="header__left">
        <img src="https://eaes.eu/wp-content/uploads/2017/05/linkedin-logo-300x300.png" alt="linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  )
}

export default Header
