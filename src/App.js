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
import { AuthContext } from './features/login/authentication/AuthContext';
import { darkTheme } from './themes/main-theme/darkTheme';
import LoginPage from './features/login/components/LoginPage';
import BrowseCases from './features/lawyer/browse cases/components/BrowseCasesPage';
import NotificationsList from './features/lawyer/notifications/components/NorificationsList';
import LawyerPage from './features/lawyer/main lawyer page/components/LawyerPage';
import MyCaseList from './features/lawyer/mycases list/components/MyCaseList';
import ProfilePage from './features/lawyer/profile page/components/ProfilePage';
import IndividualCasePage from './features/lawyer/individual case page/components/IndividualCasePage';


function App() {
  const { isAuthenticated } = useContext(AuthContext)
  console.log(darkTheme.palette.background.default, 'this')

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path='/' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <Navigate to ='/login' replace />} />
          <Route path='/login' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <LoginPage />} />
          <Route path='/lawyer' element={!isAuthenticated ? <Navigate to='/login' replace /> : <LawyerPage />} >
            <Route path="browse-cases" element={<BrowseCases />} />
            <Route path="my-cases" element={<MyCaseList />} />
            <Route path="notifications" element={<NotificationsList />} />
            <Route path="case-page" element={<IndividualCasePage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;