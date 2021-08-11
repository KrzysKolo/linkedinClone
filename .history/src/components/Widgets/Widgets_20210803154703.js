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
  const news = newsArticle.map((news) => (
    <div className="widgets__article" key={news.id}>
    <div className="widgets__articleLeft">
      <FiberManualRecordIcon />
    </div>
    <div className="widgets__articleRight">
      <h4>{news.heading}</h4>
      <p>{news.subtitle}</p>
    </div>
  </div>
  ));



  return (
    <section className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {news}
    </section>
  )
}

export default Widgets;
