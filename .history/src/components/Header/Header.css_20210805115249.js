import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export const Content = styled.section`
  align-items: center;
  display: flex;
  height: 8vh;
  margin: 0 auto;
  max-width: 1128px;
  min-height: 100%;
`;

export const Logo = styled.div`
  font-size: 0px;
  height: 100%;
  margin-right: 8px;
  img {
    height: 100%;
    padding: 5px 0;
  }
`;

export const Search = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    input {
      background-color: #eef3f8;
      border: none;
      border-color: #dce6f1;
      border-radius: 2px;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      line-height: 1.75;
      padding: 0 8px 0 40px;
      vertical-align: text-top;
      width: 219px;
    }
  }
`;

export const SearchIcon = styled.div`

`;