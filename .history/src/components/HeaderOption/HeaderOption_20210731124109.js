import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
import './HeaderOption.css';
//MATERIAL UI
//FILES

const HeaderOption = ({ Icon, title}) => {
  return (
    <div className="headerOption">
      { Icon && <Icon />}
    </div>
  )
}

export default HeaderOption
