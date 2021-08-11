import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, ArtCard } from './LeftSide.css';
//FILES


const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>

          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  )
}

export default LeftSide
