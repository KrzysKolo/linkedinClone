import React from 'react';
//COMPONENTS
import { Header, LeftSide, RightSide, Main } from './../../components/'
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, Content, Section, Layout } from './Home.css';
//FILES

const Home = (props) => {

  useEffect(() => {
    db.collection("movies").onSnapshot((onSnapshot) => {
      let tempMovies = onSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })

      dispatch(setMovies(tempMovies))
    })
  }, [])

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
