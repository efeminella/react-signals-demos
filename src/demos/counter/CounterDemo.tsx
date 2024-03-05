import {Stack} from '@mantine/core';
import CounterValue from './CounterValue';
import CounterControls from './CounterControls';
import CounterConstraints from './CounterConstraints';

const Counter = () => (
  <Stack gap={20} align='flex-start'>
    <CounterValue />
    <CounterConstraints />
    <CounterControls />
  </Stack>
);
export default Counter;