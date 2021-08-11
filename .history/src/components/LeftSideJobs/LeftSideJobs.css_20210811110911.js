import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: leftside;
`;

export const ArtCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: box-shadow 0.83s;
`;

export const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CommunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0 0;
  text-align: left;
  a {
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    padding: 4px 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    &:last-child {
      border-top: 1px solid #d6cec2;
      color: rgba(0, 0, 0, 0.6);
      padding: 12px;
      text-decoration: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;