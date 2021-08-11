import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
import './HeaderOption.css';
//MATERIAL UI
//FILES

const HeaderOption = ({ awatar, Icon, title}) => {
  return (
    <div className="headerOption">
      { Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
