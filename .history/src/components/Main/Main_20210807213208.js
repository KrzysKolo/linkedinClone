import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
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
      </ShareBox>
    </Container>
  )
}

export default Main
