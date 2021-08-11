import React, { useState } from 'react';
//COMPONENTS
import { PostModal } from './../../components';
//ROUTING
//REDUX
import { useSelector } from 'react-redux';
import { selectUserPhoto } from './../../features/user/userSlice'
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
import { Container, SharedActor, ShareBox, Article, Description, SharedImg, SocialCounts, SocialActions } from './Main.css';
//FILES
import user from './../../assets/images/user.png';
import photo from './../../assets/images/crowd.jpg';
import heart from './../../assets/images/logo-heart.png';
import like from './../../assets/images/logo-like.png';
import ins from './../../assets/images/logo-ins.png';


const Main = () => {
  const photoUser = useSelector(selectUserPhoto);
  const [showModal, setShowModal] = useState("close");
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src={user} alt="user" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <ImageIcon style={{color: '#70B5f9'}} />
            <span>Photo</span>
          </button>
          <button>
            <VideocamIcon style={{color: '#649e41'}} />
            <span>Video</span>
          </button>
          <button>
            <EventIcon style={{color: '#f7c274'}}/>
            <span>Event</span>
          </button>
          <button>
            <CalendarViewDayIcon  style={{color: '#e970a8'}}/>
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
            {photoUser ?
              <img src={photo} alt="user" />
              : <img src={user} alt="user" /> }
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <MoreHorizIcon />
            </button>
          </SharedActor>
          <Description>
            Description
          </Description>
          <SharedImg>
            <a>
              <img src={photo} alt="photo" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src={like} alt="" />
                <img src={heart} alt="" />
                <img src={ins} alt="" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>
                2 comments
              </a>
            </li>
          </SocialCounts>
          <SocialActions>
            <div>
              <ThumbUpIcon />
              <span>Like</span>
            </div>
            <div>
              <CommentIcon />
              <span>Commen</span>
            </div>
            <div>
              <SendIcon />
              <span>Send</span>
            </div>
            <div>
              <ShareIcon />
              <span>Share</span>
            </div>
          </SocialActions>
        </Article>
      </div>
      <PostModal />
    </Container>
  )
}

export default Main
