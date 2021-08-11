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
    align-items: center;
    background-color: #eef3f8;
    border-color: #dce6f1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 5px;
    pointer-events: none;
    max-width: 280px;
    input {
      background-color: #eef3f8;
      border: none;
      border-color: #dce6f1;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      line-height: 1.75;
      margin-left: 5px;
      outline: none;
      padding: 0 8px 0 40px;
      vertical-align: text-top;
      width: 219px;
    }
  }
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px ) {
    background: #fff;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%auto;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

export const NavList = styled.li`
  align-items: center;
  display: inline-block;
  & > .navlink {
    align-items: center;
    background: transparent;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);

    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const SignOut = styled.div`
  background-color: rgba(243, 242, 239, 0.5);
  border-radius: 8px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px 2px 3px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 14px;
  right: 18.5vw;
  min-width: 30vw;
  position: absolute;
  text-align: left;
  transition-duration: 167ms;
  top: 65px;
   a {
     align-items: flex-start;
     border-bottom: 1px solid rgba(0, 0, 0, 0.08);
     cursor: pointer;
     display: flex;
     flex-direction: column;
     padding: 10px;

    &:first-child {
      margin-top: 16px;
      div {
        display: flex;
        img {
        border-radius: 50%;
        height: 48px;
        object-fit: cover;
        width: 48px;
          }
        span{
          margin-left: 20px;
          h1 {
            font-size: 18px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.8);
          }
          h2 {
            font-size: 14px;
            font-weight: 300;
            color: rgba(0, 0, 0, 0.6);
            margin: 0 10px;
          }
        }
      }
      button {
        width: 100%;
        border-radius: 20px;
        margin-top: 10px;
        padding: 4px;
        font-size: 14px;
        border: 2px solid #0a66c2;
        background-color: transparent;
        color: #0a66c2;
      }
     }
    &:last-child {
      border-bottom: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
 `;

export const User = styled(NavList)`
  a {
    width: 24px;
    border-radius: 50%;
    img {
      border-radius: 50%;
      height: 20px;
      object-fit: cover;
      width: 20px;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      ${SignOut} {
        opacity: 1;
        border: 2px solid pink;
      }
    }

  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

