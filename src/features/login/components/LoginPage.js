import React from 'react';
import { Box, useTheme } from '@mui/material'
import LoginPanel from './LoginPanel';

function LoginPage() {
    const theme = useTheme();

    return (
        <Box sx={{
            backgroundColor: theme.palette.background.primary.main,
            color: theme.palette.text.primary.light,
            height: '100vh',
            padding: '10px'
        }}>
            <Grid container>
                <Grid item>
                    <LoginPanel />
                </Grid>
            </Grid>
        </Box>
    )
};

export default LoginPage;