import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useTheme, Grid, Box, Button, useMediaQuery, IconButton, FormControl, MenuItem, InputLabel, Typography, Divider, Select } from '@mui/material'
import { GlobalStyles } from "@mui/material";
import LawyerDrawer from "../mobile/components/LawyerDrawer";
import FilterPanel from "../../browse cases/components/FilterPanel";
import MenuIcon from '@mui/icons-material/Menu'


function LawyerPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    /* Adding  a state to trach the Browse Cases page */
    const currentpath = useLocation()
    const isBrowseCases = currentpath.pathname === "/lawyer/browse-cases"

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
                        <LawyerDrawer open={open} onClose={handleDrawerOpen} />
                        <Outlet />
                    </>
                ) : isBrowseCases ? (
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
                            <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                                <Grid container>
                                    <Outlet />
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container sx={{ borderLeft: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                    <Grid item xs={12}>
                                        {/* You can add any component or content here */}
                                        <Grid item xs={3} >
                                            <Grid container alignItems="flex-start" sx={{ marginLeft: '30px', borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                                <div>
                                                    <div >
                                                        <Grid container justifyContent="space-between">
                                                            <Grid item>
                                                                <Typography variant="h6" sx={{ marginY: 3 }}>Filters</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </div>

                                                    <div>
                                                        <Divider />
                                                        <FormControl sx={{ width: '100%' }}>
                                                            <InputLabel> Category </InputLabel>
                                                            <Select sx={{ width: '100%' }} label="Category">
                                                                <MenuItem value="category1"> Property Law </MenuItem>
                                                                <MenuItem value="category2"> Corporate Law </MenuItem>
                                                                <MenuItem value="category3"> Trademarks </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>

                                                    <div>
                                                        <FilterPanel />
                                                    </div>

                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid container sx={{ height: '100%' }}>
                            <Grid item xs={3} alignItems="flex-end" >
                                <Grid container alignItems="flex-start" sx={{ borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
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
}

export default LawyerPage;