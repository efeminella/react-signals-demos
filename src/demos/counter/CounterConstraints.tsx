import {Flex, NumberInput, Stack, Title} from '@mantine/core';
import {
  minimum,
  maximum,
  setMinimum,
  setMaximum
} from './counter';

const CounterConstraints = () => (
  <Stack maw={360} gap={10} align='flex-start'>
    <Title order={5}><>Set Constraints</></Title>
    <Flex align='center' gap={5}>
      <NumberInput size='sm'
        value={minimum.value}
        onChange={setMinimum}
        placeholder='Minimum' />
      <NumberInput size='sm'
        value={maximum.value}
        onChange={setMaximum}
        placeholder='Maximum' />
    </Flex>
  </Stack>
);
export default CounterConstraints;