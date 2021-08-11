import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import { Container, FollowCard } from './RightSide.css';
//FILES


const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
        </Title>
      </FollowCard>
    </Container>
  )
}

export default RightSide
