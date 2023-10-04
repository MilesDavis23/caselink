import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';import Divider from '@mui/material/Divider';
import { IconButton } from '@mui/material';
import { useGetPageTitle } from '../../navbar/functions/getLocation';

const drawerWidth = 370;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


  function PresistentLawyerDrawer( {open, handleDrawerClose} ) {
    const title = useGetPageTitle();
    const theme = useTheme();
    return (
            <Box sx={{ display: 'flex', width: '100%' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography variant='h6' sx={{ marginLeft: 1, fontFamily: 'Canela', backgroundColor: theme.palette.background.paper }} component='div'>
                        {title}
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Grid container direction='column' justifyContent='flex-start' alignItems="flex-end" sx={{width: '100%'}} > 
                    <Grid item >
                        <Button component={Link} to="/person/make-a-case" variant="text" size='large' sx={{ my: 2 }}  > Make A Case </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/person/my-cases" variant="text" size='large' sx={{ my: 2 }} > My Cases </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/person/notifications-page" variant="text" size='large' sx={{ my: 2 }} > Notifications </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to="/person/person-profile" variant="text" size='large' sx={{ my: 2 }} > Profile </Button>
                    </Grid>
                </Grid>
            </Drawer>
        </Box>
    )
};

export default PresistentLawyerDrawer;
