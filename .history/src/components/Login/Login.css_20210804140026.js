import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
  width: 90vw;
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

  & > a img {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  transition: .2s ease-in-out;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
export const SignIn = styled.a`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;