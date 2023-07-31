import React, { useContext } from 'react';
import { 
BrowserRouter as Router,
Routes,
Route,
Navigate   
} from 'react-router-dom';
import { 
  ThemeProvider
} from '@mui/material';
import { darkTheme } from './themes/main-theme/darkTheme';
import LoginPage from './features/login/components/LoginPage';
import BrowseCases from './features/lawyer/browse cases/components/BrowseCasesPage';
import { AuthContext } from './features/login/authentication/AuthContext';
import { useEffect, useState } from 'react';


function App() {
  const { isAuthenticated } = useContext(AuthContext)
  console.log(darkTheme.palette.background.default, 'this')

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
        <Route path='/login' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <LoginPage />} />
        <Route path='/lawyer' element={!isAuthenticated ? <Navigate to='/login' replace /> : <BrowseCases />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;