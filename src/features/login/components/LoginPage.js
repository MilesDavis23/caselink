import React from 'react';
import { Box, useTheme, Grid } from '@mui/material'
import LoginPanel from './LoginPanel';

function LoginPage() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            height: '100vh',
            padding: '10px'
        }}>
            <Grid container direction='column' justifyContent="center" alignItems="center" style={{height: '100%'}}>
                <Grid item style={{marginBottom:"50px"}}>
                    <p style={{color: theme.palette.text.primary, fontFamily: "Canela", fontSize: '100px' }}> caseLink! </p>
                </Grid>
                <Grid item style={{marginBottom:"50px"}}>
                    <LoginPanel />
                </Grid>
            </Grid>
        </Box>
    )
};

export default LoginPage;