import styled from 'styled-components';

export const Container = styled.aside`
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  color: #000;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-height: 90%;
  max-width: 552px;
  overflow: initial;
  position: relative;
  top: 32px;
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 20px;
  font-weight: 400;
  justify-content: space-between;
  line-height: 1.5;
  padding: 16px;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    padding: 8px;
    transition: all 167ms easy-in-out;
    &:hover {
      background-color: rgb(0, 0, 0, 0.08);
    }
  }

`;