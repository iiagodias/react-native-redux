import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView``;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  width: 60%;
  background-color: ${({ theme }) => theme.secundary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

export const BodyProfile = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.secundary};
  width: 100%;
  border-radius: 10px;
`;

export const ContainerAvatar = styled.View`
  align-items: center;
`;
