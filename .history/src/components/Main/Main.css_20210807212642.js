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
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
`;