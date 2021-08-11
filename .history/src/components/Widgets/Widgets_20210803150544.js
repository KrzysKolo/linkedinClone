import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import InfoIcon from '@material-ui/icons/Info'
//CSS
import './Widget.css';
//FILES

const Widget = () => {
  return (
    <section className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </section>
  )
}

export default Widget
