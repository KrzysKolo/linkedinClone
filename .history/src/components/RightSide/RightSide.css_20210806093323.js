import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: rightside;
`;

export const FollowCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.20);
  margin-bottom: 8px;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: center;
`;

export const Title = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 16px;
  justify-content: space-between;
`;