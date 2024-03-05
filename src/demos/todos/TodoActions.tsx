import {useRef, KeyboardEvent} from 'react';
import {Button, Input, Stack, Group} from '@mantine/core';
import {addTodo, reset, clearCompleted} from './todos';

const TodoActions = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onAdd = function() {
    if (inputRef.current !== null) {
      addTodo(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const onEnter = function(event: KeyboardEvent<HTMLInputElement>) {
    event.key === 'Enter' && onAdd();
  };

  return (
    <Stack align='flex-start'>
      <Input ref={inputRef} size='md' onKeyUp={onEnter} />
      <Group justify="space-between" grow preventGrowOverflow={false}>
        <Button onClick={onAdd}>
          Add
        </Button>
        <Button onClick={clearCompleted} color='orange'>
          Clear Completed
        </Button>
        <Button onClick={reset} color='error'>
          Clear All
        </Button>
      </Group>
    </Stack>
  );
};
export default TodoActions;