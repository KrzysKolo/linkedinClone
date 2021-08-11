import React, { useState } from 'react';
//COMPONENTS
import { PostModal } from './../../components';
//ROUTING
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './../../features/user/userSlice';
import { getArticles } from './../../features/articles/articlesSlice';
//FIREBASE
//MATERIAL UI
import ImageIcon from '@material-ui/icons/Image';
import EventIcon from '@material-ui/icons/Event';
import VideocamIcon from '@material-ui/icons/Videocam';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
//CSS
import { Container, ShareBox } from './MainJobs.css';
//FILES

const MainMyNetwork = () => {

  return (
    <Container>
      <ShareBox>
        <a>
          <h1>MyNetwork</h1>
        </a>
      </ShareBox>
    </Container>
  )
}

export default MainMyNetwork;
