import React from 'react';
import { Link } from 'react-router-dom';
import { Box, useTheme, Grid, Button } from '@mui/material';

function PersonSideBar( ) {
    
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
            }}>
                <Grid container direction='column' justifyContent='flex-end' alignItems="flex-end" sx={{width: '100%'}} xs={12} > 
                    <Grid item >
                        <Button component={Link} to="/person/make-a-case" variant="text" size='large' sx={{ my: 2 }}  > Make A Case </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/person/my-cases" variant="text" size='large' sx={{ my: 2 }} > My Cases </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/person/notifications-page" variant="text" size='large' sx={{ my: 2 }} > Notifications </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/lawyer/profile" variant="text" size='large' sx={{ my: 2 }} > Profile </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default PersonSideBar;