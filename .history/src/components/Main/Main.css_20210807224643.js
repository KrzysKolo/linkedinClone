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
      transition: 167ms easy-in-out;
      &:hover {
        background: rgba(0, 0, 0, 0.08);
        }
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
        cursor: pointer;
        flex-grow: 1;
        margin: 4px 0;
        padding-left: 16px;
        text-align: left;
        &:hover {
        background: rgba(0, 0, 0, 0.08);
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px 0;
      button {
        border-radius: 5px;
        cursor: pointer;
        padding: 0 8px;
        span {
        margin-left: 5px;
        }
      }
    }
  }
`;

export const Article = styled(CommonCard)`
  margin: 0 0 8px;
  overflow: visible;
  padding: 0;
`;

export const SharedActor = styled.div`
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding-right: 40px;
  padding: 12px 16px 0;
  display: flex;
  a {
    display: flex;
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
    }
  }
`;