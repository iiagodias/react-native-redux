import { CommonActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import ModalAddTask from '../../components/ModalAddTask';
import Task from '../../components/Task';
import { Creators as AuthActions } from '../../stores/ducks/auth';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import {
  Body,
  BodyProfile,
  BoxAdd,
  BoxIcon,
  BoxLoading,
  Container,
  ContainerAvatar,
  ContainerName,
  Footer,
  Loading,
  Name,
  Scroll,
  TextAdd
} from './styles';

const Home = ({ navigation }) => {
  const [modalAdd, setModalAdd] = useState(false);
  const dispatch = useDispatch();
  const { data, loadingLogout, logged } = useSelector((state) => state.auth);
  const { todos, loadingTodos } = useSelector((state) => state.todo);
  const { LogoutUserRequest } = AuthActions;
  const { GetTodoRequest } = TodoActions;

  useEffect(() => {
    if (!logged) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        })
      );
    }
  }, [logged]);

  useEffect(() => {
    dispatch(GetTodoRequest());
  }, []);

  return (
    <Container>
      <ModalAddTask visible={modalAdd} onClose={() => setModalAdd(false)} />
      <Scroll
        refreshControl={
          <RefreshControl
            tintColor="#000"
            refreshing={false}
            onRefresh={() => dispatch(GetTodoRequest())}
          />
        }
      >
        <Body>
          <BodyProfile>
            <BoxIcon onPress={() => dispatch(LogoutUserRequest())}>
              {loadingLogout ? (
                <Loading size="small" />
              ) : (
                <Icon name="enter-sharp" size={25} color="#000" />
              )}
            </BoxIcon>
            <ContainerAvatar>
              <Avatar />
            </ContainerAvatar>
            <ContainerName>
              <Name>{data.name}</Name>
            </ContainerName>
          </BodyProfile>
          {loadingTodos ? (
            <BoxLoading>
              <Loading size="large" />
            </BoxLoading>
          ) : (
            todos.map((item) => (
              <Task
                id={item._id}
                description={item.description}
                completed={item.completed}
                key={item._id}
              />
            ))
          )}
        </Body>
      </Scroll>
      <Footer>
        <BoxAdd onPress={() => setModalAdd(true)}>
          <TextAdd>Adicionar tarefa</TextAdd>
        </BoxAdd>
      </Footer>
    </Container>
  );
};

export default Home;
