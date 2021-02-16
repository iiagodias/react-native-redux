import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const BoxLogin = styled.View`
  background-color: ${({ theme }) => theme.secundary};
  padding: 10px;
  width: 80%;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  border-radius: 10px;
  border: 1px solid ${({ theme, error }) => (error ? theme.red : theme.border)};
  padding: 10px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.red};
`;
