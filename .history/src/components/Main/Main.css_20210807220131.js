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
  div {
    button {
      align-items: center;
      background: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      outline: none;
    }
    &:first-child {
      align-items: center;
      display: flex;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        flex-grow: 1;
        margin: 4px 0;
        padding-left: 16px;

      }
    }
  }
`;