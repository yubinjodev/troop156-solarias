import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#41644a',
    },
    secondary: {
      main: '#E86A33',
    },
    text: {
      primary: '#111813',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
  },
})