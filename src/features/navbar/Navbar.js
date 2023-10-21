import {  useTheme } from '@mui/material/styles';
import { logOut } from '../login/functions/logoutFunction';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, Badge  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../functions/custom hooks/useRequest';
import MenuIcon from '@mui/icons-material/Menu'
import PresistentLawyerDrawer from '../lawyer/lawyer drawer/Drawer';
import PresistentPersonDrawer from '../person/person drawer/PersonDrawer';

import Home from '@mui/icons-material/Home'
import Notifications from '@mui/icons-material/Notifications'
import { getNotifcations, getUserData } from './functions/axios';

import { useEffect, useState } from 'react';
import { getLocationName, useGetPageTitle } from './functions/getLocation';

function NavBar() {

    const navigate = useNavigate();
    const {execute, data, loadin, error} = useRequest(getUserData)
    useEffect(() => { execute() },[]);
    /* This is for drawer: */
    const [ open, setOpen ] = useState(false);
    /* This is the menubar:  */
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = (event) => { 
        if(event.target.textContent === 'Logout') {
            logOut()
        }

        if (data && data[0].role  === 'lawyer' && event.target.textContent === 'Profile') {
            navigate('/lawyer/lawyer-profile');
        } else if (data && data[0].role  === 'client' && event.target.textContent === 'Profile') {
            navigate('/person/person-profile');
        }
        setAnchorEl(null);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const theme = useTheme();
    /* handle home navigation: */
    const handleHome = () => {
        if (data && data[0].role  === 'lawyer') {
            navigate('/lawyer/home-page')
        } else if (data && data[0].role  === 'client') {
            navigate('/person/home-page')
        }
    }
    const handleNotification = () => {
        if (data && data[0].role === 'lawyer') {
            navigate('/lawyer/notifications')
        } else if (data && data[0].role === 'client') {
            navigate('/person/notifciations')
        }
    }
    //console.log(data)
    /* user Data: */
    const profileImgUrl = data && data.length > 0 ? data[0].profile_img_url : null;
    const indicator = data && data[0].role === 'lawyer';
    const title = useGetPageTitle();
    /* handle notfications:  */
    const { execute: fetchNotifications, data: notifications, loading: notificationsLoading, error: notificationsError } = useRequest(getNotifcations);
    useEffect(() => {
        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 10000);
        return () => clearInterval(intervalId);
    }, []);
    console.log(notifications)
    const unreadNotificationsCount = notifications ? notifications.filter(notification => !notification.read).length : 0;
    console.log(unreadNotificationsCount);

    return (
        <AppBar component="nav" position='fixed' >
            <Toolbar sx={{ backgroundColor: theme.palette.background.paper, marginLeft: 0, }} >

                <div style={{ marginBottom: 17 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, /*...(open && /*{ display: 'none' }) */ marginTop: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <Typography variant='h6' sx={{ marginLeft: 1, fontFamily: 'Canela', backgroundColor: theme.palette.background.paper }} component='div'>
                    {title}
                </Typography>

                <Typography sx={{ fontFamily: 'Canela', backgroundColor: theme.palette.background.paper }}>  </Typography>
                <div style={{ marginLeft: 'auto' }}> {/* This pushes the user segment to the right */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        style={{ width: '400px' }}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </div>

                <IconButton onClick={handleNotification}>
                    <Badge badgeContent={unreadNotificationsCount} color="error" >
                        <Notifications />
                    </Badge>
                </IconButton>

                <IconButton onClick={handleHome}>
                    <Home fontSize='large' />
                </IconButton>
                <IconButton onClick={handleMenuOpen} sx={{ marginRight: '0' }}>
                        <Avatar src={profileImgUrl || 'defaul here'} /> 
                </IconButton>
            </Toolbar>
            <div>
                {indicator ? (
                    <>
                        <PresistentLawyerDrawer open={open} handleDrawerClose={handleDrawerClose} />
                    </>
                ) : (
                    <>
                        <PresistentPersonDrawer open={open} handleDrawerClose={handleDrawerClose} />
                    </>
                )}
            </div>
        </AppBar>
    )
}

export default NavBar;