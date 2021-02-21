import React from 'react';
import Swipeable from 'react-native-swipeable';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTheme } from 'styled-components';
import { BoxIconRemove, BoxText, Container, Text } from './styles';

const Task = ({ theme }) => {
  const renderLeftContent = () => <Text>Opa</Text>;

  return (
    <Swipeable leftContent={renderLeftContent}>
      <Container>
        <BoxText>
          <Text>Buscar a pandora no petshop</Text>
        </BoxText>

        <BoxIconRemove>
          <Icon name="trash" size={25} color={theme.red} />
        </BoxIconRemove>
      </Container>
    </Swipeable>
  );
};

export default withTheme(Task);
