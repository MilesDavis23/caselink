import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme, Grid, Box, useMediaQuery, IconButton } from '@mui/material'
import { GlobalStyles } from "@mui/material";
import PresistentLawyerDrawer from "../../lawyer drawer/Drawer";
import LawyerDrawer from "../mobile/components/LawyerDrawer";
import MenuIcon from '@mui/icons-material/Menu'


function LawyerPage(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [ open, setOpen ] = React.useState(false);
    /* Adding  a state to trach the Browse Cases page */
    const currentpath = useLocation()
    const isBrowseCases = currentpath.pathname === "/lawyer/browse-cases"

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return(
        <>
            <GlobalStyles styles={{
                /* This is the global style for the scroll bar. Current set up makes it dissapear */
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
            }}>
                {isMobile ? (
                    <>
                        <IconButton onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <LawyerDrawer open={open} onClose={handleDrawerOpen} />
                        <Outlet />
                    </>
                ) : isBrowseCases ? (
                <Grid container sx={{ height: '100%' }}>    
                    <Grid item xs={3}>
                        <Grid container sx={{ borderRight: '0.5px solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                        <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ mr: 2, ...(open && { display: 'none' }), marginTop: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                        <Grid container>
                            <Outlet />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container sx={{ borderLeft: '0.5px solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                            <Grid item xs={12}>
                                {/* You can add any component or content here */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                ) : (
                    <>
                        <PresistentLawyerDrawer open={open} handleDrawerClose={handleDrawerClose}/>
                        <Grid container justifyContent='center' sx={{ height: '100%' }}>
                            <Grid item sx={6} >
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ mr: 2, ...(open && { display: 'none' }), marginTop: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                                <Grid container>
                                    <Outlet />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Box>
        </>
    )
}

export default LawyerPage;