import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useTheme, Grid, Box, Button, useMediaQuery } from '@mui/material'
import { GlobalStyles } from "@mui/material";
import FilterPanel from "../../browse cases/components/FilterPanel";
import { scrollbarStyle } from "../../../../themes/main-theme/darkTheme";


function LawyerPage({ isSmallScreen }) { 
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    /* Adding  a state to trach the Browse Cases page */
    const currentpath = useLocation()
    const isBrowseCases = currentpath.pathname === "/lawyer/browse-cases"

    return (
        <>
            <GlobalStyles styles={scrollbarStyle} />
            <Box sx={{backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary, height: '100vh', overflow: 'auto' }}>
                <>
                    <Grid container sx={{ height: '100%' }}>
                        <Grid item xs={3} alignItems="flex-end" >
                            <Grid container alignItems="flex-start" sx={{ borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                {!isSmallScreen &&
                                    <Grid container direction='column' justifyContent='flex-start' alignItems="flex-end" sx={{ width: '100%' }} xs={12} >
                                        <Grid item >
                                            <Button component={Link} to="/lawyer/browse-cases" variant="text" size='large' sx={{ my: 2 }}  >  Browse Case  </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button component={Link} to="/lawyer/my-cases" variant="text" size='large' sx={{ my: 2 }}  > My Cases </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button component={Link} to="/lawyer/notifications" variant="text" size='large' sx={{ my: 2 }}> Notifications </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button component={Link} to="/lawyer/lawyer-profile" variant="text" size='large' sx={{ my: 2 }}> Profile </Button>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                            <Grid container>
                                <Outlet />
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container sx={{ borderLeft: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                <Grid item xs={12}>
                                    {isBrowseCases &&
                                        <div>
                                            <FilterPanel />
                                        </div>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            </Box>
        </>
    )
}

export default LawyerPage;