import React, { useState } from 'react';
//COMPONENTS
import { PostModal } from './../../components';
//ROUTING
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './../../features/user/userSlice';
import { getArticles } from './../../features/articles/articlesSlice';
//FIREBASE
//MATERIAL UI
//CSS
import { Container, ShareBox } from './MainJobs.css';
//FILES

const MainNotifications = () => {

  return (
    <Container>
      <ShareBox>
        <a>
          <h1>Notifications</h1>
        </a>
      </ShareBox>
    </Container>
  )
}

export default MainNotifications;
