import React from 'react';
//COMPONENTS
//ROUTING
//REDUX
//FIREBASE
//MATERIAL UI
import InfoIcon from '@material-ui/icons/Info';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
//CSS
import { Container, FollowCard, Title, FeedList, Avatar, Recommendation, BannerCard } from './RightSide.css';
//FILES
import banner from './../../assets/images/banner.jpg';


const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <InfoIcon />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <spam>#Linkedin</spam>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <ArrowRightAltIcon />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <BannerCard />
      </BannerCard>
    </Container>
  )
}

export default RightSide
