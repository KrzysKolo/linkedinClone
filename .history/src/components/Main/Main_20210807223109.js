import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import ImageIcon from '@material-ui/icons/Image';
import EventIcon from '@material-ui/icons/Event';
import VideocamIcon from '@material-ui/icons/Videocam';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//CSS
import { Container, CommonCard, ShareBox, Article } from './Main.css';
//FILES
import user from './../../assets/images/user.png';


const Main = () => {
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
              <MoreHorizIcon />
            </a>
          </SharedActor>
        </Article>
      </div>
    </Container>
  )
}

export default Main
