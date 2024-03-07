import {Group, Title} from '@mantine/core';
import {completed, pending} from './todos';

const TodoStatus = () => {
  const pendingCount   = pending.value.length;
  const completedCount = completed.value.length;
  return (
    <Group justify="space-between" >
      <Title order={5}>Pending: {pendingCount}</Title> |
      <Title order={5}
        styles={{
          root: {
            color: (pendingCount === 0 && completedCount > 0 ? 'green' : 'black')
          }
        }}>Completed: {completedCount}</Title>
    </Group>
  );
};
export default TodoStatus;