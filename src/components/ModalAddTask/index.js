import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import * as yup from 'yup';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import InputCustom from '../InputCustom';
import {
  Body,
  Box,
  BoxAdd,
  Container,
  ContainerButtons,
  Loading,
  TextAdd
} from './styles';

const ModalAddTask = ({ theme, onClose, visible }) => {
  const dispatch = useDispatch();
  const { AddTodoRequest } = TodoActions;
  const { loadingAdd } = useSelector((state) => state.todo);

  const schema = yup.object().shape({
    description: yup.string().required('Campo descrição é obrigatório.')
  });

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = ({ description }) => {
    dispatch(AddTodoRequest(description));
  };

  return (
    <Container visible={visible} onRequestClose={onClose}>
      <Body>
        <Box>
          <InputCustom
            control={control}
            errors={errors}
            name="description"
            defaultValue=""
            placeholder="Digite a descrição"
            multiline
          />
          <ContainerButtons>
            <BoxAdd color={theme.background} onPress={onClose}>
              <TextAdd>Fechar</TextAdd>
            </BoxAdd>
            <BoxAdd onPress={handleSubmit(onSubmit)}>
              <TextAdd>{loadingAdd ? <Loading /> : 'Adicionar'}</TextAdd>
            </BoxAdd>
          </ContainerButtons>
        </Box>
      </Body>
    </Container>
  );
};

export default withTheme(ModalAddTask);
