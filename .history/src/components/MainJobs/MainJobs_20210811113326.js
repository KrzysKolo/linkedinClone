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
import { Container, SharedActor, ShareBox, Article, Description, SharedImg, SocialCounts, SocialActions } from './MainJobs.css';
//FILES
import userImg from './../../assets/images/user.png';
import photo from './../../assets/images/crowd.jpg';
import heart from './../../assets/images/logo-heart.png';
import like from './../../assets/images/logo-like.png';
import ins from './../../assets/images/logo-ins.png';

import ReactPlayer from 'react-player';


const Main = () => {
  const user = useSelector(selectUser);
  const articles = useSelector(getArticles);
  console.log(articles);
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <a>
            <h1>Recent job searches</h1>
            <p>Clear</p>
          </a>
          <a>
            <h2>jakas oferta</h2>
          </a>
        </div>
      </ShareBox>

     </Container>
  )
}

export default Main
