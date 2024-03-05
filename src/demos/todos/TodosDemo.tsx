import {Title, Stack} from '@mantine/core';
import TodoList from './TodoList';
import TodoActions from './TodoActions';
import TodoStatus from './TodoStatus';

const Todos = () => (
  <Stack align='flex-start'>
    <Title order={1}>Todos</Title>
    <TodoStatus />
    <TodoActions />
    <TodoList />
  </Stack>
);
export default Todos;