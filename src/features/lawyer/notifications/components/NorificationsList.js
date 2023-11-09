import * as React from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import NotificationElement from './NotificationElement';
import useRequest from '../../../../functions/custom hooks/useRequest';
import { getNotifcations, markAllNotifications } from '../../../navbar/functions/axios';


function NotificationsList(){
    const { execute, data, loading, error } = useRequest(getNotifcations);
    const [markedAsRead, setMarkedAsRead] = React.useState(false);


    useEffect(() => {
        async function fetchAndMarkNotifications() {
            if ( !data ) {
                await execute()
            } else if ( !markedAsRead ){
                await markAllNotifications()
                setMarkedAsRead(true);
            }
        }
        fetchAndMarkNotifications()
    }, [execute, data, markedAsRead] /* for safety and super efficiency incluid every thing in the dependency array that we are using.   */);

    if (loading) {
        return <p> Loading... </p>
    } 
    if (error) {
        return <p> Error: {error.message} </p>
    }
    return (
        <>
            <Grid container sx={{ width: '100%'}}>
                {
                    data && data.map(notificationData => (
                        <Grid item  sx={{padding: 2}} xs={12}>
                            <NotificationElement data={notificationData} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
};

export default NotificationsList;