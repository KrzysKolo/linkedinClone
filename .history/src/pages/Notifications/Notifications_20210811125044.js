import React from 'react';
//COMPONENTS
import { Header, LeftSideJobs, RightSide, MainNotifications } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Layout } from './Notifications.css';
//FILES

const Notifications = (props) => {

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Layout>
            <LeftSideJobs />
            <MainNotifications />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default Notifications;
