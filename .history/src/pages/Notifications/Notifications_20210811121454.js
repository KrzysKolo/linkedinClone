import React, { useEffect } from 'react';
//COMPONENTS
import { Header, LeftSideJobs, RightSide, MainJobs } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Layout } from './Notifications.css';
//FILES

const Jobs = (props) => {

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

export default Jobs;
