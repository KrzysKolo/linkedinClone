import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: rightside;
`;

export const FollowCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 8px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: center;
`;

export const Title = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

export const FeedList = styled.ul`
  margin-top: 16px;
  li {
    align-items: center;
    display: flex;
    font-size: 14px;
    margin: 12px 0;
    position: relative;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Avatar = styled.div`

`;