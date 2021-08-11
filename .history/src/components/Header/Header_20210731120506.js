import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//FILES

const Header = () => {
  return (
    <div>
      <h3>This is a Header</h3>
      <div className="header__left">
        <img src="https://www.google.pl/url?sa=i&url=https%3A%2F%2Fwww.kissclipart.com%2Flinkedin-icon-png-clipart-social-media-computer-ic-whgbin%2F&psig=AOvVaw2C1a6GydpHx59gNpL69SaB&ust=1627812046173000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDk0cmGjfICFQAAAAAdAAAAABAD" alt="linkedin" />
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
