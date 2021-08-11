import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import './InputOptions.css';
//FILES

const InputOptions = ({Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }}/>
      <h3>{title}</h3>
    </div>
  )
}

export default InputOptions
