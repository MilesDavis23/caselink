import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Global.css';
import { Container } from 'react-bootstrap';
import CaseList from './components/CaseList';



function App() {
  return (
    <div className="App">
      <header className='d-flex align-items-start row'>
        <div className='header-main-text m-5 col-4 align-items-start row'>
          <p className='col-6'> caselink. </p>
        </div>
      </header>
      <div className='d-flex align-items-between'>
      <Container className='d-flex align-items-start'>
        <div className='link-to-buttons m-5'>
          <div className='link-to-one d-flex align-items-start'>
            <p> Browse Cases </p>
          </div>
          <div className='link-to-one d-flex align-items-start '>
            <p> Notifications </p>
          </div>
          <div className='link-to-one d-flex align-items-start '>
            <p> My cases </p>
          </div>
          <div className='link-to-one d-flex align-items-start '>
            <p> Profile </p>
          </div>
        </div>
      </Container>
      <Container classNamer= 'col d-flex align-elements-start'>
        <CaseList/>
      </Container>
      </div>
      <footer>
        <div className='info-text p-5'>
          <p> @ 2023 </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
