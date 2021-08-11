import React from 'react';
//COMPONENTS
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
//FIREBASE
import './HeaderOption.css';
//MATERIAL UI
import { Avatar } from '@material-ui/core';
//CSS
//FILES

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      { Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar}>
          {user?.displayName[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
