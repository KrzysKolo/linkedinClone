import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import InfoIcon from '@material-ui/icons/Info'
import  FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
//CSS
import './Widget.css';
//FILES

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft"></div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  };

  return (
    <section className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </section>
  )
}

export default Widgets;
