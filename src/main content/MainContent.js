import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LoginPage from '../features/login/components/LoginPage';
import BrowseCases from '../features/lawyer/browse cases/components/BrowseCasesPage';
import NotificationsList from '../features/lawyer/notifications/components/NorificationsList';
import MyCaseList from '../features/lawyer/mycases list/components/MyCaseList';
import ProfilePage from '../features/profile page/components/ProfilePage';
import IndividualCasePage from '../features/individual case page/components/IndividualCasePage';
import MakeACase from '../features/person/make a case/components/MakeACasePage';
import SendOfferCasePage from '../features/lawyer/individual case page/components/SendOfferCasePage';
import PersonMyCaseList from '../features/person/person my cases/components/PersonMyCases';
import SplasherPage from '../features/splash/components/SplasherPage';
import Registration from '../features/registration/components/Registration';
import ResetPasswordSteps from '../features/reset password/components/ResetFlow';
import HomePage from '../features/home page/components/HomePage';
import NavBar from '../features/navbar/Navbar';
import MainLanderPage from '../features/main page/components/MainPage';
import { CaseContextProvider } from '../features/lawyer/browse cases/context/caseContext';

const MainContent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'md'))
    const location = useLocation();

    return (
        <>
            <div style={{paddingTop: (!isSmallScreen || location.pathname === '/' || location.pathname === '/login' || location.pathname === '/registration') ? 0 : 49}}>
            {isSmallScreen && location.pathname !== '/' && location.pathname !=='/login' && location.pathname !== '/registration' && location.pathname !== '/reset-password' && <NavBar />}
                <Routes>
                    {/* <Route path='/' element={isAuthenticated ? <Navigate to='/lawyer' replace /> : <Navigate to ='/login' replace />} />  */}
                    <Route path='/' element={<SplasherPage />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/password-reset' element={<ResetPasswordSteps />} />
                    <Route path='/reset-password' element={<ResetPasswordSteps />} />
                    <Route path='/login' element={<LoginPage />} style={{paddingTop: 0}} />
                    <Route path='/lawyer' element={<MainLanderPage isSmallScreen={isSmallScreen} />} >
                        <Route path="browse-cases" element={ <BrowseCases /> } />
                        <Route path="my-cases" element={<MyCaseList />} />
                        <Route path="notifications" element={<NotificationsList />} />
                        <Route path="case-page/:caseId" element={<IndividualCasePage />} />
                        <Route path="lawyer-profile" element={<ProfilePage />} />
                        <Route path="send-offer-case-page" element={<SendOfferCasePage />} />
                        <Route path="home-page" element={<HomePage/>} />
                    </Route>
                    <Route path='/person' element={<MainLanderPage isSmallScreen={isSmallScreen} />}>
                        <Route path="make-a-case" element={<MakeACase />} />
                        <Route path="my-cases" element={<PersonMyCaseList />} />
                        <Route path="person-profile" element={<ProfilePage />} />
                        <Route path="notifications-page" element={<NotificationsList />} />
                        <Route path="case-page/:caseId" element={<IndividualCasePage />} />
                        <Route path="home-page" element={<HomePage/>} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

/* {location.pathname !== '/' && location.pathname !=='/login' && location.pathname !== '/registration' && location.pathname !== '/reset-password' && <NavBar />}
 */

export default MainContent;