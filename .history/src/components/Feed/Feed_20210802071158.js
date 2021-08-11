import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import CreateIcon from '@material-ui/icons/Create';
//CSS
import './Feed.css';
//FILES

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
        </div>
      </div>
    </div>
  )
}

export default Feed

