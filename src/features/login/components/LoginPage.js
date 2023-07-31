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
                height: '130vh',
                overflow: 'auto',
            }}>
                <Grid container direction='column' justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap' }}>
                    <Grid item style={{...loginPaperStyle,  textAlign: 'justify', fontFamily:'Canela'}} > <h1> Welcome back! </h1></Grid>
                    <Grid item sx={{ marginBottom: "30px" }}>
                        <LoginPanel />
                    </Grid>
                    <Grid item style={{...loginPaperStyle,  textAlign: 'justify'}} >
                        <p>
                        Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                        </p>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default LoginPage;