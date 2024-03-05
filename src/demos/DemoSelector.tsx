import {useSignal} from '@preact/signals-react';
import {SegmentedControl, Space, Title} from '@mantine/core';
import Counter from './counter/CounterDemo';
import Todos from './todos/TodosDemo';
import {getStore, setStore} from './store';

const STORE_KEY = 'selected-demo';

enum Demo {
  Counter = 'Counter',
  Todos = 'Todos'
}

const DemoSelector = () => {
  const app = useSignal<Demo>(
    getStore(STORE_KEY) || Demo.Counter
  );
  const onSelect = function (val: string) {
    app.value = val as Demo;
    setStore(STORE_KEY, val);
  };
  return (
    <>
      <div className="chooser">
        <Title order={3}>Choose Demo</Title>
        <Space h="md" />
        <SegmentedControl fullWidth
          data={[Demo.Counter, Demo.Todos]}
          value={app.value}
          onChange={onSelect} />
      </div>
      <div className="container">
        {app.value === Demo.Todos ? <Todos /> : <Counter />}
      </div>
    </>
  );
};
export default DemoSelector;