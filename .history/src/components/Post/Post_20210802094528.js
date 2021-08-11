import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import { Avatar } from  '@material-ui/core';
//CSS
import './Post.css';
//FILES

const Post = ({name, description, message, photoUrl}) => {
  return (
    <aside className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Krzysztofa Kołodziejczak</h2>
          <p>Description</p>
        </div>
      </div>
    </aside>
  )
}

export default Post
