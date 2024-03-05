import {Button, Group} from '@mantine/core';
import {increment, decrement, reset} from './counter';

const CounterControls = () => (
  <Group gap={10} align='center'>
    <Button onClick={decrement} color='blue'>Decrement</Button>
    <Button onClick={increment}>Increment</Button>
    <Button onClick={reset} color='error'>Reset</Button>
  </Group>
);
export default CounterControls;