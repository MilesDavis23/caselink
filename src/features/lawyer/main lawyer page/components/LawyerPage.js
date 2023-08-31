import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme, Grid, Box, useMediaQuery, IconButton } from '@mui/material'
import SideBar from "../../lawyer sidebar/components/LawyerSideBar";
import PresistentLawyerDrawer from "../../lawyer drawer/Drawer";
import LawyerDrawer from "../mobile/components/LawyerDrawer";
import MenuIcon from '@mui/icons-material/Menu'


function LawyerPage(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return(
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                {isMobile ? (
                    <>
                        <IconButton onClick={handleDrawerView}>
                            <MenuIcon />
                        </IconButton>
                        <LawyerDrawer open={drawerOpen} onClose={handleDrawerView} />
                        <Outlet />
                    </>
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
                                    sx={{ mr: 2, ...(open && { display: '' }), marginTop: 2 }}
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