import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: leftside;
`;

export const ArtCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: box-shadow 0.83s;
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background: url('/images/background.jpg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  background-clip: content-box;
  background-color: white;
  background-image:url('/images/camera.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: none;
  box-sizing: border-box;
  height: 72px;
  margin: -38px auto 12px;
  width: 72px;
`;

export const Link = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const AddPhotoText = styled.div`
  color: #0a66c2;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  margin-top: 4px;
`;

export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

& > a {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  text-decoration: none;
}

`;

export const Item = styled.a``;