import React, { useReducer } from 'react'
import { getUser } from '../../../functions/role check/getUser'
import ProfilePanel from '../../profile page/components/ProfilePanel';
import HighightedCases from './HighlightedCases';


/* Component for displaying some relevant content on home page for each user */
const HomePage = () => {
    let cookie = 'authToken';
    const user = getUser(cookie);
    console.log("User:", user);

    return (
        <>
            <div style={{ padding: 20, marginTop: 10 }}>
                <ProfilePanel />
                <HighightedCases />
            </div>
        </>
    );
};

export default HomePage;

/**
 * 
 * 
 *             <p style={{padding: 50}}>
                Users role: {user ? user.role : 'Loading...'}, 
                User Id: {user ? user.userId : 'Loading...'}, 
                The User Object coming from the cookie: {JSON.stringify(user)}
            </p>
 */