import React from 'react';
import { Body, BoxLogin, Container, Input, Scroll } from './styles';

const Login = () => (
  <Container>
    <Scroll>
      <Body>
        <BoxLogin>
          <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
        </BoxLogin>
      </Body>
    </Scroll>
  </Container>
);

export default Login;
