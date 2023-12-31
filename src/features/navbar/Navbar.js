import {  useTheme } from '@mui/material/styles';
import { logOut } from '../login/functions/logoutFunction';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, Badge, Grid  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../functions/custom hooks/useRequest';
import PresistentLawyerDrawer from '../lawyer/lawyer drawer/Drawer';
import PresistentPersonDrawer from '../person/person drawer/PersonDrawer';
import Home from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import Notifications from '@mui/icons-material/Notifications'
import { getNotifcations, getUserData } from './functions/axios';
import { useEffect, useState } from 'react';
import { useGetPageTitle } from './functions/getLocation';


const ProfileMenu = ({ anchorEl, onClose, role, navigate }) => {
    const handleMenuClick = (event) => {
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
            <Notifications sx={{fontSize: 35}} />
        </Badge>
    </IconButton>
);

const UserAvatar = ({ imageUrl, onClick }) => (
    <IconButton onClick={onClick}>
        <Avatar src={imageUrl || 'default here'} />
    </IconButton>
);

const logo = '/favicon.ico';
const LogoAvatar = ({ logoUrl, size = 10 }) => (
    <div  >
        <Avatar src={logoUrl} sx={{ width: size, height: size, margin: 1, marginRight: 4 }} />
    </div>
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
const DrawerIcon = ({ handleDrawerOpen }) => (
    <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, marginTop: 2 }}
    >
        <MenuIcon />
    </IconButton>
)

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
    };

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
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar component="nav" position='fixed'>
            <Toolbar sx={{ backgroundColor: theme.palette.background.paper, marginLeft: 0 }}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={6} >
                        <Grid container alignItems="center">
                                <DrawerComponent isOpen={open} onClose={handleDrawerClose} role={data?.[0]?.role} />
                            <Grid item>
                                <DrawerIcon handleDrawerOpen={handleDrawerOpen} />
                            </Grid>
                            <Grid item xs>
                                <Typography variant='h6' sx={{ marginLeft: 0, backgroundColor: theme.palette.background.paper, marginTop: 2 }}>
                                    {title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <div style={{ marginLeft: '10px', marginTop: '10px' }}>

                            <NotificationIcon onClick={handleNotification} unreadCount={unreadNotificationsCount} />

                            <IconButton onClick={handleHome}>
                                <Home sx={{ fontSize: 40 }} />
                            </IconButton>

                            <ProfileMenu anchorEl={anchorEl} onClose={handleMenuClose} role={data && data[0].role} navigate={navigate} />
                            <UserAvatar imageUrl={profileImgUrl} onClick={handleMenuOpen} />

                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;