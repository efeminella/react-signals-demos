import {Title} from '@mantine/core';
import {counter} from './counter';

const CounterValue = () => (
  <Title order={1}><>Count: {counter}</></Title>
);
export default CounterValue;