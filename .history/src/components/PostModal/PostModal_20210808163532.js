import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
import { useSelector } from 'react-redux';
import { selectUserPhoto } from './../../features/user/userSlice'
//FIREBASE
//MATERIAL UI
import CloseIcon from '@material-ui/icons/Close';
//CSS
import { Container, Content, Header } from './PostModal.css';
//FILES
import user from './../../assets/images/user.png';

const PostModal = (post) => {
  const photoUser = useSelector(selectUserPhoto);
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <CloseIcon />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            { photoUser
            ?  <img src={photoUser} alt="user" />
            : <img src={user} alt="user" /> }
          </UserInfo>
        </SharedContent>
      </Content>
    </Container>
  )
}

export default PostModal;
