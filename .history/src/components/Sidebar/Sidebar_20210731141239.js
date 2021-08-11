import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//CSS
import './Sidebar.css';
//MATERIAL UI
import { Avatar } from  '@material-ui/core';
//FILES

const Sidebar = () => {
  return (
    <section className="sidebar">
     <div className="sidebar__top">
      <img src="" alt="" />
      <Avatar className="sidebar__avatar" />
      <h2>Krzysztofa Kołodziejczak</h2>
      <h4>krzysztofa.kolodziejczak@gamil.com</h4>
     </div>
     <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
      </div>
     </div>
    </section>
  )
}

export default Sidebar;

