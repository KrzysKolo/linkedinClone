import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import WidgetsIcon from '@material-ui/icons/Widgets';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
//CSS
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item } from './LeftSide.css';
//FILES


const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welkom, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <WidgetsIcon />
          </a>
        </Widget>
        <Item>
          <span>
            <TurnedInIcon />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>Events</span>
          <img src={item} alt="" />
        </a>
      </CommunityCard>
    </Container>
  )
}

export default LeftSide
