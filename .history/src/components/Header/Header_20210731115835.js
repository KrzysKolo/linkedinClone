import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
//MATERIAL UI
import SearchIcon from '@material-ui/icons/Search';
//FILES

const Header = () => {
  return (
    <div>
      <h3>This is a Header</h3>
      <div className="header__left">
        <img src="" alt=" " />
        <div className="header__search">
          <SearchIcon />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  )
}

export default Header
