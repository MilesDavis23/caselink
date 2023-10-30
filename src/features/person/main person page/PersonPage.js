import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTheme, Grid, Box, useMediaQuery, IconButton, Button } from '@mui/material'
import { GlobalStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { scrollbarStyle } from '../../../themes/main-theme/darkTheme';

function PersonPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <GlobalStyles styles={scrollbarStyle} />
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                {isMobile ? (
                    <>
                        <IconButton onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>

                        <Outlet />
                    </>
                ) : (
                        <>
                            <Grid container sx={{ height: '100%' }}>
                                <Grid item xs={3} alignItems="flex-end" >
                                    <Grid container alignItems="flex-start" sx={{ borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>

                                        <Grid container direction='column' justifyContent='flex-start' alignItems="flex-end" sx={{ width: '100%' }} >
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
                                                <Button component={Link} to="/person/person-profile" variant="text" size='large' sx={{ my: 2 }} > Profile </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto', }}>
                                    <Grid container>
                                        <Outlet />
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <Grid container sx={{ borderLeft: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                        <Grid item xs={12}>
                                           
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                )}
            </Box>
        </>
    )
};

export default PersonPage;
