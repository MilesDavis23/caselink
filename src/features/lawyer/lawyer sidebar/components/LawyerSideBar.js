import React from 'react';
import { Link } from 'react-router-dom';
import { Box, useTheme, Grid, Button } from '@mui/material'


function SideBar( ) {
    const theme = useTheme()

    return(
        <> 
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
            }}>
                <Grid container direction='column' justifyContent='flex-end' alignItems="flex-end" sx={{width: '100%'}} xs={12} > 
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
                        <Button component={Link} to="/lawyer/profile" variant="text" size='large' sx={{ my: 2 }}> Profile </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default SideBar;