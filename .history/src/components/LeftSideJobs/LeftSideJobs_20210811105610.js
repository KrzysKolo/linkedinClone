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
import { Container, ArtCard, UserInfo, CardBackground, Photo, Link, AddPhotoText, Widget, Item, CommunityCard } from './LeftSideJobs.css';
//FILES
import item from './../../assets/images/item.png';


const LeftSideJobs = (props) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <ArtCard>
        <Item>
          <span>
            <TurnedInIcon />
            My Items
          </span>
        </Item>
      </ArtCard>
    </Container>
  )
}

export default LeftSideJobs;
