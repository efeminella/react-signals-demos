import {Group, Title} from '@mantine/core';
import {completed, pending} from './todos';

const TodoStatus = () => (
  <Group justify="space-between" >
    <Title order={5}>Pending: {pending.value.length}</Title> |
    <Title order={5}>Completed: {completed.value.length}</Title>
  </Group>
);
export default TodoStatus;