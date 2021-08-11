import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import WidgetsIcon from '@material-ui/icons/Widgets';
//CSS
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText  } from './LeftSide.css';
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
          </a>
        </Widget>
      </ArtCard>
    </Container>
  )
}

export default LeftSide
