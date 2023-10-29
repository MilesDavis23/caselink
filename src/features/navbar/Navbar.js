import {  useTheme } from '@mui/material/styles';
import { logOut } from '../login/functions/logoutFunction';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, Badge, Grid  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../functions/custom hooks/useRequest';
import MenuIcon from '@mui/icons-material/Menu'
import PresistentLawyerDrawer from '../lawyer/lawyer drawer/Drawer';
import PresistentPersonDrawer from '../person/person drawer/PersonDrawer';
import Home from '@mui/icons-material/Home'
import Notifications from '@mui/icons-material/Notifications'
import { getNotifcations, getUserData } from './functions/axios';
import { useEffect, useState } from 'react';
import { useGetPageTitle } from './functions/getLocation';


const ProfileMenu = ({ anchorEl, onClose, role, navigate }) => {
    const handleMenuClick = (event) => {
       // event.stopPropagation()
        const clickedOption = event.target.textContent; 
        if (clickedOption === 'Profile') {
            if (role && role === 'lawyer') {
                navigate('/lawyer/lawyer-profile');
            } else if (role && role === 'client') {
                navigate('/person/person-profile');
            }
        } else if ( clickedOption === 'Logout') {
            logOut();
        }
        onClose();

    };

    return (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose} style={{width: '400px'}}>
            <MenuItem onClick={handleMenuClick}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClick}>Logout</MenuItem>
        </Menu>
    );
};

const NotificationIcon = ({ onClick, unreadCount }) => (
    <IconButton onClick={onClick}>
        <Badge badgeContent={unreadCount} color="error">
            <Notifications />
        </Badge>
    </IconButton>
);

const UserAvatar = ({ imageUrl, onClick }) => (
    <IconButton onClick={onClick}>
        <Avatar src={imageUrl || 'default here'} />
    </IconButton>
);

/* a separate drawer component */
const DrawerComponent = ({ isOpen, onClose, role }) => {
    if (role === 'lawyer') {
        return <PresistentLawyerDrawer open={isOpen} handleDrawerClose={onClose} />;
    } else if (role === 'client') {
        return <PresistentPersonDrawer open={isOpen} handleDrawerClose={onClose} />;
    }
    return null;
};

const NavBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const {execute, data, loadin, error } = useRequest(getUserData);
    useEffect(() => { execute() }, []);
    /* state for drawer: */
    const [open, setOpen] = useState(false);
    /* state for menu bar: */
    const [anchorEl, setAnchorEl] = useState(null);
    const title = useGetPageTitle();
    /* handle notfications:  */
    const { execute: fetchNotifications, data: notifications, loading: notificationsLoading, error: notificationsError } = useRequest(getNotifcations);
    useEffect(() => {
        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 10000);
        return () => clearInterval(intervalId);
    }, []);
    const unreadNotificationsCount = notifications ? notifications.filter(notification => !notification.read).length : 0;
    const profileImgUrl = data && data.length > 0 ? data[0].profile_img_url : null;

    const handleRoleBasedNavigation = (role, pathMap) => {
        if (role && pathMap[role]) {
            navigate(pathMap[role]);
        }
    }

    const handleHome = () => {
        const homeNavigationMap = {
            'lawyer' : '/lawyer/home-page',
            'client' : '/person/home-page'
        };
        handleRoleBasedNavigation(data?.[0]?.role, homeNavigationMap);
    };

    const handleNotification = () => {
        const notificationNavigationMap = {
            'lawyer' : '/lawyer/notifications',
            'client' : '/person/notifications-page'
        };
        handleRoleBasedNavigation(data?.[0]?.role, notificationNavigationMap);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar component="nav" position='fixed'>
            <Toolbar sx={{ backgroundColor: theme.palette.background.paper, marginLeft: 0 }}>
                <Grid container>

                    <Grid item xs={3}>
                        <div>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, marginTop: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>

                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant='h6' sx={{ marginLeft: 1, backgroundColor: theme.palette.background.paper, marginTop: 2 }} component='div'>
                            {title}
                        </Typography>
                    </Grid>

                    <Grid item xs={3} justifyContent='flex-start'>
                        <div style={{ marginLeft: '10px'}}>

                            <UserAvatar imageUrl={profileImgUrl} onClick={handleMenuOpen} />


                            <ProfileMenu anchorEl={anchorEl} onClose={handleMenuClose} role={data && data[0].role} navigate={navigate} />


                            <IconButton onClick={handleHome}>
                                <Home fontSize='large' />
                            </IconButton>

                            <NotificationIcon onClick={handleNotification} unreadCount={unreadNotificationsCount} />
                            
                        </div>
                    </Grid>

                </Grid>
            </Toolbar>
            <DrawerComponent isOpen={open} onClose={handleDrawerClose} role={data?.[0]?.role} />
        </AppBar>
    );
};

export default NavBar;



/*

                <div style={{ marginBottom: 17 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, marginTop: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <Typography variant='h6' sx={{ marginLeft: 1, fontFamily: 'Canela', backgroundColor: theme.palette.background.paper }} component='div'>
                    {title}
                </Typography>

                <div style={{ marginLeft: 'auto' }}>
                    <ProfileMenu anchorEl={anchorEl} onClose={handleMenuClose} role={data && data[0].role} navigate={navigate} />
                </div>

                <NotificationIcon onClick={handleNotification} unreadCount={unreadNotificationsCount} />
                <IconButton onClick={handleHome}>
                    <Home fontSize='large'/>
                </IconButton>
                <UserAvatar imageUrl={profileImgUrl} onClick={handleMenuOpen}/>

*/