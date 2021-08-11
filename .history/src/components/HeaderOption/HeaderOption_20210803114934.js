import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
import './HeaderOption.css';
//MATERIAL UI
import { Avatar } from '@material-ui/core';
//CSS
//FILES

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      { Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar} />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
