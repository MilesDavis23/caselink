import React from 'react';
import { Box, useTheme, Grid } from '@mui/material'
import LoginPanel from './LoginPanel';
import NavBar from '../../navbar/Navbar';
import { loginPaperStyle } from '../styles/LoginStyle';
import { GlobalStyles } from '@mui/material';

function LoginPage(  ) {
    const theme = useTheme();

    return (
        <>
            <GlobalStyles styles={{
                '*::-webkit-scrollbar': {
                    width: '0px',
                },
                '*::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '*::-webkit-scrollbar-thumb': {
                    background: '#888',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            }}/>
            <NavBar />
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Grid container direction='column' justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap' }}>
                    <Grid item style={{...loginPaperStyle, fontFamily:'Canela', fontSize: '50px'}} textAlign='center' > <h1> Please login. </h1></Grid>
                    <Grid item sx={{ marginBottom: "30px" }}>
                        <LoginPanel />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default LoginPage;