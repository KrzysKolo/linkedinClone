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
import { Container, Content, Section, Layout } from './Home.css';
//FILES

const Home = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("articles").onSnapshot((onSnapshot) => {
      let tempArticles = onSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })
      dispatch(setArticles(tempArticles))
    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Section>
            <h5><a>Hiring in a hurry? -  </a></h5>
            <p> Find talented pros in record time Upwork and keep business moving</p>
          </Section>
          <Layout>
            <LeftSide />
            <Main />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  )
}

export default Home
