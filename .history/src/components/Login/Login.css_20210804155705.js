import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
  width: 90vw;
  border: 1px solid red;
`;

export const Nav = styled.nav`
  max-width: 1128px;
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
    color: #0a66c2;
    text-decoration: none;
  }
`;

export const Section = styled.section`
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1128px;
  min-height: 780px;
  padding-bottom: 138px;
  padding-top: 40px;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

export const Hero = styled.div`
  padding: 0;
  width: 100%;
  h1 {
    color: #2977c9;
    font-size: 56px;
    font-weight: 200;
    line-height: 70px;
    padding-bottom: 0;
    width: 55%;
    @media (max-width: 768px ) {
      font-size: 20px;
      line-height: 2;
      text-align: center;
      width: 100%;

    }
  }
  img {
    bottom: -2px;
    position: absolute;
    right: -150px;
    width: 700px;
    /* z-index: -1; */
    @media (max-width: 768px) {
      height: initial;
      position: initial;
      top: 230px;
      width: 100%;
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;

  }
`;

export const Google = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 100%;
  img {
    height: 50%;
  }
`;