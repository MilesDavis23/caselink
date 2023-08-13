import {  useTheme } from '@mui/material/styles';
import {Container, AppBar, Toolbar, Typography } from '@mui/material';

function NavBar() { 

    const theme = useTheme();

    return (
        <AppBar >
                <Toolbar sx={{ backgroundColor: theme.palette.background.paper, margin: 0,}} >
                    <Typography variant='h6' sx={{ fontFamily: 'Canela', backgroundColor: theme.palette.background.paper }} component='div'>
                    </Typography>
                </Toolbar>
        </AppBar>
    )
}

export default NavBar;