import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: main;
`;

export const CommonCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

export const ShareBox = styled(CommonCard)`
  background: #fff;
  color: #958b7b;
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  padding: 22px 16px;
  a {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    h1 {
      color: rgba(0, 0, 0, 0.9);
      font-weight: 500;
      font-size: 20px;
      line-height: 2;
    }
    p {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
      padding: 10px;
      transition: all 167ms easy-in-ouy;

    }
  }

`;

