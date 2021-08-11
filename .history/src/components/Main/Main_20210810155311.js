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
import { Container, SharedActor, ShareBox, Article, Description, SharedImg, SocialCounts, SocialActions } from './Main.css';
//FILES
import userImg from './../../assets/images/user.png';
import photo from './../../assets/images/crowd.jpg';
import heart from './../../assets/images/logo-heart.png';
import like from './../../assets/images/logo-like.png';
import ins from './../../assets/images/logo-ins.png';


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
        {user && user.photo
          ? <img src={user.photo} alt="user" />
          : <img src={userImg} alt="user" />
        }
          <button onClick={handleClick}>Start a post</button>
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
        { articles && articles.map((article) => (
          <Article key={article.data}>
          <SharedActor>
            <a>
            {article.autor.image ?
              <img src={article.autor.image} alt="user" />
              : <img src={userImg} alt="user" /> }
              <div>
                <span>{article.autor.title}</span>
                <span>{article.autor.description}</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <MoreHorizIcon />
            </button>
          </SharedActor>
          <Description>
            {article.article}
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
                {article.comment} comments
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

        ))}
        <Article>
          <SharedActor>
            <a>
            {user.photo ?
              <img src={user.photo} alt="user" />
              : <img src={userImg} alt="user" /> }
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
      <PostModal showModal={showModal} handleClick={handleClick}  />
    </Container>
  )
}

export default Main
