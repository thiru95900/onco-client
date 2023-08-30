import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './theme/customTheme';
import { ContextProvider } from './context/UserContext';
const theme = createTheme(themeOptions);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
     <ThemeProvider theme={theme}>
      <ContextProvider>
      <Router>
        <App />
      </Router>
      </ContextProvider>
    </ThemeProvider>
  // </React.StrictMode>
);
