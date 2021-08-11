import React from 'react';
//COMPONENTS
import { InputOptions } from './../';
//REDUX
//FIREBASE
//MATERIAL UI
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import VideocamIcon from '@material-ui/icons/Videocam';

//CSS
import './Feed.css';
//FILES

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={VideocamIcon} title="Video" color="#649e41" />
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={EventIcon} title="Event" color="#f7c274" />
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={SubscriptionsIcon} title="Event" color="#f7c274" />
        </div>
      </div>
    </div>
  )
}

export default Feed
