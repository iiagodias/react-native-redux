import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TodoActions } from '../../stores/ducks/todo';
import { Body, Button, Container, Scroll, Text } from './styles';

const Home = ({ removeTodo, addTodo, todos }) => {
  const addNewTodo = () => {
    addTodo({ id: Math.random(), nome: 'Iago Dias' });
  };

  return (
    <Container>
      <Scroll>
        <Body>
          <Button onPress={() => addNewTodo()}>
            <Text>Adicionar Todo</Text>
          </Button>

          {todos.map((item) => (
            <Button key={item.id} onPress={() => removeTodo(item.id)}>
              <Text>{item.nome}</Text>
            </Button>
          ))}
        </Body>
      </Scroll>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
