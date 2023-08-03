import * as React from 'react';
import { Grid } from '@mui/material';
import NotificationElement from './NotificationElement';

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