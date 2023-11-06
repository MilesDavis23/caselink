import React, { useEffect, useState } from "react";
import { logOut } from "../../login/functions/logoutFunction";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import { useTheme, Grid, Box, Button, Typography, Avatar, IconButton, Menu, MenuItem, Badge} from '@mui/material'
import Home from '@mui/icons-material/Home'
import Notifications from '@mui/icons-material/Notifications'
import { GlobalStyles } from "@mui/material";
import FilterPanel from "../../lawyer/browse cases/components/FilterPanel";
import { scrollbarStyle } from "../../../themes/main-theme/darkTheme";
import { useGetPageTitle } from "../../navbar/functions/getLocation";
import useRequest from "../../../functions/custom hooks/useRequest";
import { getUserData, getNotifcations } from "../../navbar/functions/axios";
import { CaseContextProvider } from "../../lawyer/browse cases/context/caseContext";

const UserAvatar = ({ imageUrl, onClick }) => (
    <IconButton onClick={onClick}>
        <Avatar src={imageUrl || 'default here'} />
    </IconButton>
);

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

const SideMenu = ({ role }) => {
    if (role === 'lawyer') {
        return (
            <>
                <Grid item>
                    <Button component={Link} to="/lawyer/browse-cases" variant="text" size='large' sx={{ my: 2 }}  >  Browse Case  </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/lawyer/my-cases" variant="text" size='large' sx={{ my: 2 }}  > My Cases </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/lawyer/notifications" variant="text" size='large' sx={{ my: 2 }}> Notifications </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/lawyer/lawyer-profile" variant="text" size='large' sx={{ my: 2 }}> Profile </Button>
                </Grid>
            </>
        )
    } else if (role === 'client') {
        return (
            <>
                <Grid container direction='column' justifyContent='flex-start' alignItems="flex-end" sx={{ width: '100%' }} >
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
            </>
        )
    }
};

const MainLanderPage = ({ isSmallScreen }) => { 
    const theme = useTheme();
    const title = useGetPageTitle();
    /* state to track the Browse Cases page */
    const currentpath = useLocation()
    const navigate = useNavigate();
    const isBrowseCases = currentpath.pathname === "/lawyer/browse-cases"
    /* get user data: */
    const {execute, data, loading, error } = useRequest(getUserData);
    useEffect(() => { execute() }, []);
    /* user avatar img: */
    const profileImgUrl = data && data.length > 0 ? data[0].profile_img_url : null;
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    /* Home Icon: */
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
    /* Notifications:  */
    const { execute: fetchNotifications, data: notifications, loading: notificationsLoading, error: notificationsError } = useRequest(getNotifcations);
    useEffect(() => {
        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 10000);
        return () => clearInterval(intervalId);
    }, []);
    const unreadNotificationsCount = notifications ? notifications.filter(notification => !notification.read).length : 0;
    const handleNotification = () => {
        const notificationNavigationMap = {
            'lawyer' : '/lawyer/notifications',
            'client' : '/person/notifications-page'
        };
        handleRoleBasedNavigation(data?.[0]?.role, notificationNavigationMap);
    };

    return (
        <>
            <GlobalStyles styles={scrollbarStyle} />
            <Box sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary, height: '100vh', overflow: 'auto' }}>
                <CaseContextProvider>
                    <>
                        <Grid container sx={{ height: '100%' }}>
                            {!isSmallScreen &&
                                <Grid item xs={3} alignItems="flex-end" >
                                    <Grid container alignItems="flex-start" sx={{ borderRight: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                        <Grid container direction='column' justifyContent='flex-start' alignItems="flex-end" sx={{ width: '100%' }} xs={12} >
                                            <Grid item>
                                                <Typography variant='h5' sx={{ marginLeft: 1, fontFamily: 'Canela', backgroundColor: theme.palette.background.paper, marginTop: 1 }} component='div'>
                                                    CL.
                                                </Typography>
                                            </Grid>
                                            <SideMenu role={data && data[0].role} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }

                            <Grid item xs={!isSmallScreen ? 6 : 12} justifyContent="center" alignItems="center" sx={{ paddingLeft: 1, height: '100%', overflow: 'auto' }}>
                                <Grid container sx={{ width: '100%' }}>
                                    {!isSmallScreen &&
                                        <Grid item sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: theme.palette.background.paper, width: '100%' }}>
                                            <Typography variant="h5" sx={{ paddingBottom: 0.5, margin: 1 }}>
                                                {title}
                                            </Typography>
                                        </Grid>
                                    }
                                    <Outlet />
                                </Grid>
                            </Grid>

                            {
                                !isSmallScreen &&
                                <Grid item xs={3}>
                                    <Grid container sx={{ borderLeft: '0 solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                                        <Grid item xs={12}>
                                            <div >
                                                <UserAvatar imageUrl={profileImgUrl} onClick={handleMenuOpen} />
                                                <ProfileMenu anchorEl={anchorEl} onClose={handleMenuClose} role={data && data[0].role} navigate={navigate} />

                                                <IconButton onClick={handleHome}>
                                                    <Home sx={{ fontSize: 40 }} />
                                                </IconButton>

                                                <NotificationIcon onClick={handleNotification} unreadCount={unreadNotificationsCount} />

                                            </div>

                                            {isBrowseCases &&
                                                <FilterPanel />
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </>
                </CaseContextProvider>
            </Box>
        </>
    )
}

export default MainLanderPage;