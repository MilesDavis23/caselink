import React from 'react';
import { Box, useTheme } from '@mui/material'

function LoginPage() {
    const theme = useTheme();
    //console.log(theme.palette)

    return (
        <Box
            sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, height: '100vh' }}
        >
            <div>
                Hello!
            </div>
        </Box>
    )
};

export default LoginPage;