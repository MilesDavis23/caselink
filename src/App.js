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
import BrowseCases from './features/lawyer/browse cases/components/BrowseCasesPage';


function App() {
  console.log(darkTheme.palette.background.default)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/lawyer' element={<BrowseCases />} />
          <Route path='*' element={<Navigate to='/lawyer' replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;