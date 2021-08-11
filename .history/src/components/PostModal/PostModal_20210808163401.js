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

        </UserInfo>
      </SharedContent>
      </Content>
    </Container>
  )
}

export default PostModal;
