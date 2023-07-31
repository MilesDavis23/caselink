import React from 'react';
import { Box, useTheme, Grid, Button } from '@mui/material'


function SideBar( { setMyCases } ) {
    const theme = useTheme()

    return(
        <> 
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
            }}>
                <Grid container direction='column' justifyContent='flex-end' alignItems="flex-end" sx={{width: '100%'}} xs={12} > 
                    <Grid item >
                        <Button variant="text" size='large' sx={{ my: 2 }} onClick={() => { setMyCases(false) } } >  Browse Case  </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="text" size='large' sx={{ my: 2 }} onClick={() => { setMyCases(true) } } > My Cases </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="text" size='large' sx={{ my: 2 }}> Notifications </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="text" size='large' sx={{ my: 2 }}> Profile </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default SideBar;
