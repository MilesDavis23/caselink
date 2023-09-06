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
                    <Grid item xs={7} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%', flexWrap:'nowrap' }}>
                            <Grid item>
                                <Grid item  style={{ padding: 0}} textAlign='center' > 
                                    <h1 style={{ fontFamily: 'Canela', fontSize: '150px' }}> CaseLink! </h1>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%', flexWrap: 'nowrap', paddingRight: '300px' }}>
                            <Grid item>
                                <Grid item style={{ ...loginPaperStyle, fontFamily: 'Canela', fontSize: '50px' }} textAlign='center' >
                                    <h1> Welcome to CaseLink! </h1>
                                </Grid>
                                <Grid item style={{ ...loginPaperStyle, textAlign: 'justify' }} >
                                    <p>
                                        Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                                    </p>
                                </Grid>
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