import styled from 'styled-components';

export const Container = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.border};
`;

export const Image = styled.ImageBackground`
  width: 100px;
  height: 100px;
  resize-mode: cover;
`;

export const ContainerLoading = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.secundary,
  size: 'large'
}))``;
