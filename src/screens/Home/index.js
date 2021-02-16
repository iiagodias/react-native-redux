import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../../stores/ducks/todos/actions';
import { Body, Button, Container, Scroll, Text } from './styles';

const Home = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todos);

    return (
        <Container>
            <Scroll>
                <Body>
                    <Button onPress={() => dispatch(addTodo({ id: Math.random(), nome: 'Iago Dias' }))}>
                        <Text>Adicionar Todo</Text>
                    </Button>

                    {todos.map((item) =>
                        <Button key={item.id} onPress={() => dispatch(removeTodo(item.id))}>
                            <Text>{item.nome}</Text>
                        </Button>
                    )}
                </Body>
            </Scroll>
        </Container>
    );
}

export default Home;