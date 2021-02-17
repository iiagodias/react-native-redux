import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yup from 'yup';
import InputCustom from '../../components/InputCustom';
import * as AuthActions from '../../stores/ducks/auth/actions';
import { Body, BoxLogin, Button, Container, TextButton } from './styles';

const Login = ({ AuthUserRequest, loading }) => {
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
    AuthUserRequest(data);
  };

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
            <TextButton>{loading ? 'Carregando' : 'Entrar'}</TextButton>
          </Button>
        </BoxLogin>
      </Body>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  data: state.auth.data,
  error: state.auth.error,
  logged: state.auth.logged
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
