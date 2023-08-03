import * as Rect from 'react';
import { Grid } from '@mui/material';
import NotificationElement from './notification-element';

function NotificationsList(){
    return (
        <>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
        </>
    )
};

export default NotificationsList;