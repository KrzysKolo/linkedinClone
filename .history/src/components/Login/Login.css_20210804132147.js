import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
`;
export const Nav = styled.nav`
  max-width: 1120px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    border: 1px solid red;
    @media (max-width: 768px)
  }
`;