import {createTheme} from '@mantine/core';

export const theme = createTheme({
  fontFamily: [
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  colors: {
    primary: [
      '#F1FBE9',
      '#D8F4C3',
      '#BFED9C',
      '#A7E675',
      '#8EDE4E',
      '#75D728',
      '#5DAC20',
      '#468118',
      '#2F5610',
      '#172B08',
    ],
    error: [
      '#FFF5F5',
      '#FFE3E3',
      '#FFC9C9',
      '#FFA8A8',
      '#FF8787',
      '#FF6B6B',
      '#FA5252',
      '#F03E3E',
      '#E03131',
      '#C92A2A',
    ]
  }
});