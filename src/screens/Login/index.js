import { yupResolver } from '@hookform/resolvers/yup';
import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import InputCustom from '../../components/InputCustom';
import { Creators as AuthActions } from '../../stores/ducks/auth';
import {
  Body,
  BoxLogin,
  Button,
  Container,
  Loading,
  TextButton
} from './styles';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { logged, loading } = useSelector((state) => state.auth);
  const { AuthUserRequest } = AuthActions;

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Campo e-mail é obrigatório.')
      .email('Digite um e-mail válido.'),
    password: yup
      .string()
      .required('Digite sua senha.')
      .min(8, 'No mínimo 8 digitos.')
  });

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    dispatch(AuthUserRequest(data));
  };

  useEffect(() => {
    if (logged) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }]
        })
      );
    }
  }, [logged]);

  return (
    <Container>
      <Body>
        <BoxLogin>
          <InputCustom
            control={control}
            errors={errors}
            name="email"
            defaultValue=""
            placeholder="Digite seu e-mail"
          />
          <InputCustom
            control={control}
            errors={errors}
            name="password"
            defaultValue=""
            placeholder="Senha"
            secureTextEntry
          />

          <Button onPress={handleSubmit(onSubmit)}>
            <TextButton>{loading ? <Loading /> : 'Entrar'}</TextButton>
          </Button>
        </BoxLogin>
      </Body>
    </Container>
  );
};

export default Login;
