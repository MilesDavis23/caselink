import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './themes/main-theme/darkTheme';
import MainContent from './main content/MainContent';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;