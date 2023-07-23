import React from 'react';
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


function App() {
  console.log(darkTheme.palette.background.default)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to='/login' replace />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;