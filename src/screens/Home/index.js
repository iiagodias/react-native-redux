import { CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import Task from '../../components/Task';
import { Creators as AuthActions } from '../../stores/ducks/auth';
import {
  Body,
  BodyProfile,
  BoxIcon,
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
  const { LogoutUserRequest } = AuthActions;

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

  return (
    <Container>
      <Scroll>
        <Body>
          <BodyProfile>
            <BoxIcon onPress={() => dispatch(LogoutUserRequest())}>
              {loadingLogout ? (
                <Loading />
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
          <Task />
        </Body>
      </Scroll>
    </Container>
  );
};

export default Home;
