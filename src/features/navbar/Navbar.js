import {  useTheme } from '@mui/material/styles';
import { logOut } from '../login/functions/logoutFunction';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem  } from '@mui/material';
import useRequest from '../../functions/custom hooks/useRequest';
import getUserData from './functions/axios';

import { useEffect, useState } from 'react';

function NavBar() {
    const {execute, data, loadin, error} = useRequest(getUserData)
    useEffect(() => { execute() },[]);
    /* This is the menubar:  */
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = (event) => { 
        if(event.target.textContent === 'Logout') {

            logOut()
        }
        setAnchorEl(null);
        logOut()
    };
    const theme = useTheme();
    console.log(data)
    /* user Data: */
    const profileImgUrl = data && data.length > 0 ? data[0].profile_img_url : null;

    return (
        <AppBar component="nav" position='fixed' >
                <Toolbar sx={{ backgroundColor: theme.palette.background.paper, marginLeft: 0,}} >
                    <Typography variant='h6' sx={{ fontFamily: 'Canela', backgroundColor: theme.palette.background.paper, marginLeft: 30 }} component='div'>
                        CaseLink!
                    </Typography>
                    <div style={{ marginLeft: 'auto' }}> {/* This pushes the user segment to the right */}
                    <IconButton onClick={handleMenuOpen}>
                        <Avatar src={profileImgUrl || 'default_image_url'} /> {/* Replace with your user avatar URL */}
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </div>
                </Toolbar>
        </AppBar>
    )
}

export default NavBar;