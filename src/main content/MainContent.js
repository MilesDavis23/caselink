import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { AuthContext } from '../features/login/authentication/AuthContext';
import { darkTheme } from '../themes/main-theme/darkTheme';
import { useLocation } from 'react-router-dom';
import LoginPage from '../features/login/components/LoginPage';
import BrowseCases from '../features/lawyer/browse cases/components/BrowseCasesPage';
import NotificationsList from '../features/lawyer/notifications/components/NorificationsList';
import LawyerPage from '../features/lawyer/main lawyer page/components/LawyerPage';
import MyCaseList from '../features/lawyer/mycases list/components/MyCaseList';
import ProfilePage from '../features/profile page/components/ProfilePage';
import IndividualCasePage from '../features/individual case page/components/IndividualCasePage';
import MakeACase from '../features/person/make a case/components/MakeACasePage';
import PersonPage from '../features/person/main person page/PersonPage';
import SendOfferCasePage from '../features/lawyer/individual case page/components/SendOfferCasePage';
import ActiveCasePage from '../features/lawyer/individual case page/components/ActiveCase';
import AccpetOfferCasePage from '../features/person/offer received page/components/AcceptOfferPage';
import PersonNotificationsList from '../features/person/person notifications/components/PersonNotifications';
import PersonMyCaseList from '../features/person/person my cases/components/PersonMyCases';
import PersonActiveCasePage from '../features/person/person active case/components/ActivePersonCasePage';
import SplasherPage from '../features/splash/components/SplasherPage';
import Registration from '../features/registration/components/Registration';
import ResetPasswordSteps from '../features/reset password/components/ResetFlow';
import HomePage from '../features/home page/components/HomePage';
import NavBar from '../features/navbar/Navbar';

const MainContent = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && location.pathname !=='/login' && location.pathname !== '/registration' && location.pathname !== '/reset-password' && <NavBar />}
            <div style={{ paddingTop: (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/registration') ? 0 : 49 }}>
                <Routes>
                    {/* <Route path='/' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <Navigate to ='/login' replace />} />  */}
                    <Route path='/' element={<SplasherPage />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/password-reset' element={<ResetPasswordSteps />} />
                    <Route path='/reset-password' element={<ResetPasswordSteps />} />
                    <Route path='/login' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <LoginPage />} style={{paddingTop: 0}} />
                    <Route path='/lawyer' element={<LawyerPage />} >
                        <Route path="browse-cases" element={<BrowseCases />} />
                        <Route path="my-cases" element={<MyCaseList />} />
                        <Route path="notifications" element={<NotificationsList />} />
                        <Route path="case-page/:caseId" element={<IndividualCasePage />} />
                        <Route path="lawyer-profile" element={<ProfilePage />} />
                        <Route path="send-offer-case-page" element={<SendOfferCasePage />} />
                        <Route path="active-case-page" element={<ActiveCasePage />} />
                        <Route path="home-page" element={<HomePage/>} />
                    </Route>
                    <Route path='/person' element={<PersonPage />}>
                        <Route path="make-a-case" element={<MakeACase />} />
                        <Route path="offer-received" element={<AccpetOfferCasePage />} />
                        <Route path="my-cases" element={<PersonMyCaseList />} />
                        <Route path="active-case-page" element={<PersonActiveCasePage />} />
                        <Route path="person-profile" element={<ProfilePage />} />
                        <Route path="notifications-page" element={<PersonNotificationsList />} />
                        <Route path="case-page/:caseId" element={<IndividualCasePage />} />
                        <Route path="home-page" element={<HomePage/>} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};


export default MainContent;