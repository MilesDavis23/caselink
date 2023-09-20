import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme, Grid, Box, useMediaQuery, IconButton } from '@mui/material'
import { GlobalStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

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

                        <Outlet />
                    </>
                ) : (
                        <>
                            <Grid container sx={{ height: '100%' }}>
                                <Grid item xs={3} >
                                    <Grid container alignItems="flex-start" sx={{ marginLeft: '30px', borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                        {/* Nested Grid container for IconButton and FilterPanel */}
                                        <div>
                                            <div style={{ marginLeft: '250px' }}>
    
    
                                            </div>
                                        </div>
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
                                            {/* You can add any component or content here */}
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