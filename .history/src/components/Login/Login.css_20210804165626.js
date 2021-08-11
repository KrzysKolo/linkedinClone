import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
  width: 90vw;
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
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const Google = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 56px;
  justify-content: center;
  transition-duration: 167ms;
  width: 100%;
  vertical-align: middle;
  z-index: 0;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  img {
    height: 40%;
    margin-right: 10px;
  }
`;

export const Email = styled(Google)`
  margin: 20px auto 10px;
`;

export const Input = styled.input`
  align-items: center;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  height: 46px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 15px 5px;
  transition-duration: 167ms;
  width: 95%;
`;

export const TextField = styled.div`
  font-size: 18px;
  margin-bottom: 20px;

`;
export const Span = styled.span`
  color: #006699;
  cursor: pointer;
  padding-left: 5px;
  p {
    border: 1px solid red;
  }
`;