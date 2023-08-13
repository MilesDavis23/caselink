import * as React from 'react';
import { Grid } from '@mui/material';
import ProfilePanel from './ProfilePanel';
import DetailsPanel from './DetailsPanel';
import LatestReviews from './ReviewsPanel';


function ProfilePage(){

    return(

        <>
            <Grid container justifyContent="center" alignItems="center" sx={{paddingTop: 2}}>
                <Grid item xs={11} sx={{paddingBottom: 2}}>
                    <ProfilePanel />
                </Grid>
                <Grid item xs={11} sx={{paddingY: 2}}>
                    <DetailsPanel />
                </Grid>
                <Grid item xs={11} sx={{paddingY: 2}}>
                    <LatestReviews />
                </Grid>
            </Grid>
        </>
    )
}

export default ProfilePage;