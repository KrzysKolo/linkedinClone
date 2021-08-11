import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, ShareBox } from './MainJobs.css';
//FILES

const MainJobs = () => {
  return (
    <Container>
      <ShareBox>
        <a>
          <h1>Recent job searches</h1>
          <p>Clear</p>
        </a>
        <a>
          <span>
            <h2>programista .net</h2>
            <h3>Wielkopolskie</h3>
          </span>
        </a>
      </ShareBox>
    </Container>
  )
}

export default MainJobs;
