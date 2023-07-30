import React from "react";
import { useTheme, Grid, Box } from '@mui/material'
import NavBar from "../../../navbar/Navbar";

function BrowseCases(){
    const theme = useTheme();

    return(
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <NavBar />
                <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap', height: '70vh' }}>
                    <Grid item xs={4}>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12}>Item 1</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} justifyContent="center" alignItems="center">
                        <Grid container>
                            <Grid item xs={12}>Item 3</Grid>
                            <Grid item xs={12}>Item 4</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BrowseCases;