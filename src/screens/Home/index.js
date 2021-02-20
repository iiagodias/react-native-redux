import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import {
  Body,
  BodyProfile,
  Button,
  Container,
  ContainerAvatar,
  Scroll,
  Text
} from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const { addTodo, removeTodo } = TodoActions;

  const addNewTodo = () => {
    dispatch(addTodo({ id: Math.random(), nome: 'Iago Dias' }));
  };

  return (
    <Container>
      <Scroll>
        <Body>
          <BodyProfile>
            <ContainerAvatar>
              <Avatar />
            </ContainerAvatar>
            <Button onPress={() => addNewTodo()}>
              <Text>Adicionar Todo</Text>
            </Button>

            {todos.map((item) => (
              <Button
                key={item.id}
                onPress={() => dispatch(removeTodo(item.id))}
              >
                <Text>{item.nome}</Text>
              </Button>
            ))}
          </BodyProfile>
        </Body>
      </Scroll>
    </Container>
  );
};

export default Home;
