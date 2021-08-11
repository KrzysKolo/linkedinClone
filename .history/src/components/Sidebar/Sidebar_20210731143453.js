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
      <img src="https://media-exp1.licdn.com/dms/image/C4E16AQHdpQvo4oSmaA/profile-displaybackgroundimage-shrink_350_1400/0/1612095179028?e=1632960000&v=beta&t=Kbm7NH4FjRNuzlA1YvTIqqf7XSmZNLyL4tqOpK-4JWI" alt="" />
      <Avatar className="sidebar__avatar" />
      <h2>Krzysztofa Kołodziejczak</h2>
      <h4>krzysztofa.kolodziejczak@gamil.com</h4>
     </div>
     <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed your profile</p>
        <p className="sidebar__statNumber">77</p>
      </div>
      <div className="sidebar__stat">
        <p>Views of your post</p>
        <p className="sidebar__statNumber">215</p>
      </div>
     </div>
     <div className="sidebar__bottom">
      <p>Recent</p>

     </div>
    </section>
  )
}

export default Sidebar;

