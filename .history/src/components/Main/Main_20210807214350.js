import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import EventIcon from '@material-ui/icons/Event';
import VideocamIcon from '@material-ui/icons/Videocam';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
//CSS
import { Container, CommonCard, ShareBox } from './Main.css';
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
            <ImageIcon style={{color: red}} />
            <span>Photo</span>
          </button>
          <button>
            <VideocamIcon  />
            <span>Video</span>
          </button>
          <button>
            <EventIcon />
            <span>Event</span>
          </button>
          <button>
            <CalendarViewDayIcon  />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  )
}

export default Main
