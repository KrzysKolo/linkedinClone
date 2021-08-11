import React, { useEffect } from 'react';
//COMPONENTS
import { Header, LeftSideJobs, RightSide, MainJobs } from './../../components/'
//ROUTING
//REDUX
import { useDispatch } from 'react-redux';
import { setArticles } from '../../features/articles/articlesSlice';
//FIREBASE
import db from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Container, Content, Layout } from './Messaging.css';
//FILES

const Messaging = (props) => {

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Layout>
            <LeftSideJobs />
            <MainJobs />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default Messaging;
