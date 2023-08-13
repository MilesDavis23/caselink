import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme, Grid, Box } from '@mui/material'
import SideBar from "../../lawyer sidebar/components/LawyerSideBar";


function LawyerPage(){
    const theme = useTheme();

    return(
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Grid container  sx={{ height: '100%' }}>
                    <Grid item xs={3} >
                        <Grid container sx={{ borderRight: '0.5px solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                            <Grid item xs={12}  >
                                <SideBar />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                        <Grid container>
                            <Outlet />
                        </Grid>
                    </Grid>
                    <Grid item xs={3} >
                        <Grid container sx={{ borderLeft: '0.5px solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                            <Grid item xs={12}  >
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LawyerPage;