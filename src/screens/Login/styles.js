import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.primary};
`;

export const Body = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const Scroll = styled.ScrollView`
`;

export const BoxLogin = styled.View`
    background-color: ${({ theme }) => theme.secundary};
    padding: 10px;
    width: 80%;
    border-radius: 10px;
`;

export const Input = styled.TextInput`
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 10px;
    margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`

`;
