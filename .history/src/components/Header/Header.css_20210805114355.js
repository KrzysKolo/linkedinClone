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
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
    }
  }
`;

export const SearchIcon = styled.div`

`;