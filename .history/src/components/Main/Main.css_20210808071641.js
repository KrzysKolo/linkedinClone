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
      overflow: hidden;
      margin-left: 5px;
      span {
        text-align: left;
        &:first-child {
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          font-weight: 700;
        }
        &:nth-child(n+1) {
          color: rgba(0, 0, 0, 0.6);
          font-size: 12px;
        }
      }
    }
  }
  button {
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: center;
    margin-top: 5px;
    position: absolute;
    outline: none;
    right: 10px;
    top: 0;
    width: 30px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export const Description = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  overflow: hidden;
  padding: 0 16px;
  text-align: left;
`;

export const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

export const SocialCounts = styled.ul`
  align-items: center;
  border-bottom: 1px solid #e9e5df;
  display: flex;
  overflow: auto;
  line-height: 1.3;
  list-style: none;
  margin: 0 16px;
  padding: 8px 0;
  li {
    font-size: 12px;
    margin-right: 5px;
    display: flex;
  button {
      align-items: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      img {
        height: 18px;
      }
      span {
        font-size: 12px;
        margin-left: 5px;
        transition: all 167ms easy-in-out;
        &:after {
          content: "*";
          position: relative;
          top: 0;
          left: 3px;
        }
        &:hover{
          text-decoration: underline;
          color: #0a66c2;
        }
      }
    }
  }

`;

export const SocialCounts2 = styled.ul``;