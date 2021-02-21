import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.secundary};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
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
  align-items: center;
`;
