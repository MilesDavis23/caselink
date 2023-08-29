import React from 'react';
import { Box, useTheme, Grid } from '@mui/material'
import { loginPaperStyle } from '../../login/styles/LoginStyle';
import { GlobalStyles } from '@mui/material';
import SplasherPanel from '../splash panel/SplasherPanel';

function SplasherPage(  ) {
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

            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Grid container sx={{ height: '100%' }}>
                    <Grid item xs={8} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
                            <Grid item xs={12} sx={{ heigth: '100%' }}>
                            <Grid item style={{ ...loginPaperStyle, fontFamily: 'Canela', fontSize: '250px' }} textAlign='center' > <h1> CaseLink! </h1></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ borderLeft: '0.5px solid #FFFDF7', height: '100%', flexWrap:'nowrap' }}>
                            <Grid item xs={12} sx={{ height: '100%' }}>
                                <Grid item style={{ ...loginPaperStyle, fontFamily: 'Canela', fontSize: '50px' }} textAlign='center' > <h1> Welcome! </h1></Grid>
                                <Grid item sx={{ marginBottom: "30px" }}>
                                    <SplasherPanel />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default SplasherPage;