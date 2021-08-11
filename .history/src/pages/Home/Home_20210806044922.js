import React from 'react';
//COMPONENTS
import { Header } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Section, Layout } from './Home.css';
//FILES

const Home = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Section>
            <h5><a>Hiring in a hurry? -  </a></h5>
            <p> Find talented pros in record time Upwork and keep business moving</p>
          </Section>
        </Content>
          <Layout>
            <div> Left Side</div>
            <div> Main</div>
            <div> Rifgt Side</div>
          </Layout>
      </Container>
    </>
  )
}

export default Home
