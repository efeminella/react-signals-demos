import {useRef, KeyboardEvent} from 'react';
import {Button, Input, TextInput, Stack, Group} from '@mantine/core';
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
      <Input.Wrapper label="What needs to be done?"
        styles={{
          root: {
            width: '342px'
          }
        }}>
        <TextInput ref={inputRef} 
          onKeyUp={onEnter}
          size='md' />
      </Input.Wrapper>
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