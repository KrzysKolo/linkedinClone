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
    button {
      align-items: center;
      background-color: transparent;
      border-radius: 15px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      display: inline-flex;
      font-weight: 600;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      outline: none;
      padding: 12px;
      text-align: center;
    }
  }
`;

export const Avatar = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVs6EkIdr8g8FPXYijKXF_xh8-uzXS1iF7jgLjiXYAV03vhOEFgAuvProC8ia7Sbd_7AiyUI8&usqp=CAc");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;