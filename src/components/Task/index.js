import React from 'react';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import {
  BoxCheck,
  BoxIconRemove,
  BoxText,
  Container,
  Loading,
  Text
} from './styles';

const Task = ({ theme, completed, description, id }) => {
  const dispatch = useDispatch();
  const { loadingDelete } = useSelector((state) => state.todo);
  const { DeleteTodoRequest } = TodoActions;

  const renderLeftContent = () => (
    <BoxCheck>
      <Icon name="ios-checkmark-sharp" size={35} color="#FFFF" />
    </BoxCheck>
  );

  const renderCard = () => (
    <Container completed={completed}>
      <BoxText>
        <Text>{description}</Text>
      </BoxText>

      <BoxIconRemove onPress={() => dispatch(DeleteTodoRequest(id))}>
        {loadingDelete === id ? (
          <Loading color={theme.red} />
        ) : (
          <Icon name="trash" size={25} color={theme.red} />
        )}
      </BoxIconRemove>
    </Container>
  );

  return completed ? (
    renderCard()
  ) : (
    <Swipeable
      leftContent={renderLeftContent()}
      leftActionActivationDistance={150}
      onLeftActionRelease={() => console.log('oi')}
    >
      {renderCard()}
    </Swipeable>
  );
};

export default withTheme(Task);
