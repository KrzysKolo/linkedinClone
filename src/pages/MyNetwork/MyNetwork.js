import React, { useEffect } from 'react';
//COMPONENTS
import { Header, LeftSideJobs, RightSide, MainMyNetwork } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Layout } from './MyNetwork.css';
//FILES

const MyNetwork = (props) => {

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Layout>
            <LeftSideJobs />
            <MainMyNetwork />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default MyNetwork;
