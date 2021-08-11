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
const newsArticle = [
  {id: 1, heading: "Jakiś tekst 1", subtitle: "jakiś mały tekst 1" },
  {id: 2, heading: "Jakiś tekst 2", subtitle: "jakiś mały tekst 2" },
  {id: 3, heading: "Jakiś tekst 3", subtitle: "jakiś mały tekst 3" },
]
const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  };
  const text = newsArticle
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
