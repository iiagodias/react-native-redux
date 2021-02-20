import styled from 'styled-components';

export const Container = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.border};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: cover;
`;
