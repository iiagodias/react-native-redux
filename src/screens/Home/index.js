import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import Task from '../../components/Task';
import { Creators as AuthActions } from '../../stores/ducks/auth';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import {
  Body,
  BodyProfile,
  BoxIcon,
  BoxLoading,
  Container,
  ContainerAvatar,
  ContainerName,
  Loading,
  Name,
  Scroll
} from './styles';

const Home = ({ navigation }) => {
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
      <Scroll>
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
                description={item.description}
                completed={item.completed}
                key={item.id}
              />
            ))
          )}
        </Body>
      </Scroll>
    </Container>
  );
};

export default Home;
