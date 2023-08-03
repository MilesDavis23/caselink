import React from "react";
import { useTheme, Grid } from '@mui/material'
import MyCaseList from "../../mycases list/components/MyCaseList";

function BrowseCases(){
    const theme = useTheme();

    return (
        <>
            <Grid item xs={8} justifyContent="center" alignItems="center" sx={{ paddingLeft: 0, height: '100%', overflow: 'auto' }}>
                <Grid container>
                            <MyCaseList />
                            <Grid item xs={12}>Item 3</Grid>
                            <Grid item xs={12}>Item 4</Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default BrowseCases;