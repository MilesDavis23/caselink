import { Box, useTheme, Grid, Typography } from '@mui/material'
import LoginPanel from './LoginPanel';
import { loginPaperStyle } from '../styles/LoginStyle';
import { GlobalStyles } from '@mui/material';
/* Particles part: */
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { particlesStyle } from '../../../themes/background/particles/stylers';

function LoginPage(  ) {
    const theme = useTheme();
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
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
            }} />
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
                <Grid container direction='column' justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap', zIndex: 1, }}>
                    <Grid item sx={{ marginBottom: "30px" }}>
                        <LoginPanel />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default LoginPage;