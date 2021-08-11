import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import CloseIcon from '@material-ui/icons/Close';
//CSS
import { Container, Content, Header } from './PostModal.css';
//FILES

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
          text
      </Content>
    </Container>
  )
}

export default PostModal;
