import styled from 'styled-components';

export const Container = styled.aside`
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  color: #000;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-height: 90%;
  max-width: 552px;
  overflow: initial;
  position: relative;
  top: 32px;
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  font-size: 20px;
  font-weight: 400;
  justify-content: space-between;
  line-height: 1.5;
  padding: 16px;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    padding: 8px;
    transition: all 167ms easy-in-out;
    &:hover {
      background-color: rgb(0, 0, 0, 0.08);
    }
  }
`;

export const SharedContent = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px 12px;
  vertical-align: baseline;
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  padding: 12px 24px;
  img {
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    height: 48px;
    margin-right: 5px;
    width: 48px;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

export const AttachAssets = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
`;

export const AssetsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  min-width: auto;
  padding: 16px 4px;
  transition: all 167ms easy-in-out;
  img {
    width: 80%;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;