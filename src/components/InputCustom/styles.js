import styled from 'styled-components';

export const TextError = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.red};
  margin-top: 5px;
`;

export const Input = styled.TextInput`
  border-radius: 10px;
  border: 1px solid ${({ theme, error }) => (error ? theme.red : theme.border)};
  padding: 10px;
  margin-top: 10px;
`;
