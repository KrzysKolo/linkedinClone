import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 65px;
  max-width:  100%;
`;

export const Content = styled.section`
  max-width: 1128px;
  margin: 0 auto;
`;

export const Section = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    color: #434649;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 768px ) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
`;