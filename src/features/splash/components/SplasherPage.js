import React from 'react';
import { Box, useTheme, Grid, Typography } from '@mui/material'
import { loginPaperStyle } from '../../login/styles/LoginStyle';
import { GlobalStyles } from '@mui/material';
import SplasherPanel from '../splash panel/SplasherPanel';
/* Particles part: */
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { particlesStyle } from '../../../themes/background/particles/stylers';


function SplasherPage(  ) {
    const theme = useTheme();
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

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
                position: 'relative'
            }}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particlesStyle}
                />
                <Grid container sx={{ height: '100%', }} style={{ zIndex: 1}}>
                    <Grid item xs={7} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%', flexWrap:'nowrap', zIndex: 1 }}>
                            <Grid item style={{ zIndex: 1}}>
                                <Typography variant="h1" sx={{fontFamily: 'Canela'}}> Welcome to </Typography>
                                <Grid item  style={{ padding: 0}} textAlign='center' > 
                                    <h1 style={{ fontFamily: 'Canela', fontSize: '150px' }}> CaseLink! </h1>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} >
                        <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ height: '100%', flexWrap: 'nowrap', paddingRight: '300px' }}>
                            <Grid item style={{zIndex: 1}}>
                                <Grid item style={{ ...loginPaperStyle, fontFamily: 'Canela', fontSize: '50px' }} alignItems='flex-start' textAlign='start' >
                                </Grid>
                                <Grid item style={{ ...loginPaperStyle, textAlign: 'justify', zIndex: 1 }} >
                                    <p>
                                    In today's complex legal landscape, finding the right professional assistance can be daunting. Enter our innovative case management system, designed to bridge the gap between legal experts and those in need of legal guidance. Users can seamlessly register as lawyers or individuals, creating a dynamic ecosystem where legal challenges meet expert solutions. Individuals can present their "cases" to the platform, allowing lawyers to extend their expertise through tailored offers. But our platform goes beyond just introductions. 
                                    <div></div>
                                    Once connected, both parties can collaboratively manage and track the case's progress, ensuring transparency and efficiency every step of the way. Dive into a world where legal collaboration is not just a concept but a reality. Our platform is more than just a service; it's a community where every legal challenge finds its solution. Join us in redefining the future of legal collaboration.
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