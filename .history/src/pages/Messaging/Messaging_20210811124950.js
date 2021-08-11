import React, { useEffect } from 'react';
//COMPONENTS
import { Header, LeftSideJobs, RightSide, MainMessaging } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
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
            <MainMessaging />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default Messaging;
