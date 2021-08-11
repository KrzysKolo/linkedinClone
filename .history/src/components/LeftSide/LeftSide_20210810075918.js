import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../../features/user/userSlice'
//FIREBASE
//MATERIAL UI
import WidgetsIcon from '@material-ui/icons/Widgets';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import AddIcon from '@material-ui/icons/Add';
//CSS
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item, CommunityCard } from './LeftSide.css';
//FILES
import item from './../../assets/images/item.png';


const LeftSide = (props) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welkom, {user.name ? user.name : "there"}!</Link>
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
          <span>
            Events
            <AddIcon />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>
            Discover more
          </span>
        </a>
      </CommunityCard>
    </Container>
  )
}

export default LeftSide
