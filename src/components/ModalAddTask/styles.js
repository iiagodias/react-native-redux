import styled from 'styled-components';

export const Container = styled.Modal.attrs({ transparent: true })``;

export const Body = styled.SafeAreaView`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.secundary};
  padding: 20px;
  border-radius: 10px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BoxAdd = styled.TouchableOpacity`
  background-color: ${({ color, theme }) => color || theme.primary};
  padding: 15px;
  width: 48%;
  align-items: center;
  border-radius: 10px;
`;

export const TextAdd = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.secundary,
  size: 'small'
}))``;
