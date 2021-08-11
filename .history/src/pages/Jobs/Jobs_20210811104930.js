import React, { useEffect } from 'react';
//COMPONENTS
import { Header, LeftSide, RightSide, Main } from './../../components/'
//ROUTING
//REDUX
import { useDispatch } from 'react-redux';
import { setArticles } from '../../features/articles/articlesSlice';
//FIREBASE
import db from '../../firebase/confing';
//MATERIAL UI
//CSS
import { Container, Content, Section, Layout } from './Jobs.css';
//FILES

const Jobs = (props) => {

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Layout>
            <LeftSideJobs />
            <Main />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default Jobs;