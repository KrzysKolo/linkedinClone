import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
import { Avatar } from  '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
//CSS
import './Post.css';
//FILES

const Post = ({name, description, message, photoUrl}) => {
  return (
    <aside className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption  Icon={}
      </div>
    </aside>
  )
}

export default Post
