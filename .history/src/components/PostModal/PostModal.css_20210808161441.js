import styled from 'styled-components';

export const Container = styled.aside`
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: #000;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;