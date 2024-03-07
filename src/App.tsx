import {MantineProvider} from '@mantine/core';
import DemoSelector from './demos/DemoSelector';
import {theme} from './theme/theme';
import '@mantine/core/styles.css';
import './styles/App.css';

export default () => (
  <MantineProvider theme={theme}>
    <DemoSelector />
  </MantineProvider>
);