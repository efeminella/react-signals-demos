import {Stack} from '@mantine/core';
import Todo from './Todo';
import {todos} from './todos';

const TodoList = () => (
  <Stack align='stretch' gap={10}>
    {todos.value.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </Stack>
);
export default TodoList;