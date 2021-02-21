import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.secundary};
  padding: 10px;
  height: 60px;
  align-items: center;
  opacity: ${({ completed }) => (completed ? 0.8 : 1)};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BoxText = styled.View`
  width: 90%;
  justify-content: center;
`;

export const BoxIconRemove = styled.TouchableOpacity`
  width: 9%;
  padding: 5px;
`;

export const Text = styled.Text`
  font-size: 16px;
`;

export const BoxCheck = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.green};
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  margin-top: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme, color }) => ({
  color: color || theme.secundary,
  size: 'small'
}))``;
