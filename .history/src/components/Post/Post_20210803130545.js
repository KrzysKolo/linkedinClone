import React from 'react';
//COMPONENTS
import { InputOptions} from './../';
//REDUX
//FIREBASE
//MATERIAL UI
import { Avatar } from  '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
//CSS
import './Post.css';
//FILES

const Post = ({name, description, message, photoUrl}) => {
  return (
    <aside className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions  Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOptions Icon={CommentIcon} title="Comment" color="gray" />
        <InputOptions  Icon={SendIcon} title="Send" color="gray" />
        <InputOptions  Icon={ShareIcon} title="Share" color="gray" />
      </div>
    </aside>
  )
}

export default Post
