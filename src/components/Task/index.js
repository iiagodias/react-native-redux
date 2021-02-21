import React from 'react';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTheme } from 'styled-components';
import { BoxCheck, BoxIconRemove, BoxText, Container, Text } from './styles';

const Task = ({ theme, completed, description }) => {
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

      <BoxIconRemove>
        <Icon name="trash" size={25} color={theme.red} />
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
