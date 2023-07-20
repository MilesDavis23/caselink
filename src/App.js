import React from 'react';
import { 
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom';
import './App.css';
import LoginPage from './features/login/components/LoginPage';


function App(){
  return (
    <Router>
      <Routes>
        <Route path='/login' element={
          <LoginPage/>
        }/>
      </Routes>
    </Router>
  );
};

export default App;