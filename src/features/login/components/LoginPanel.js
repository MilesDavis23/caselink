import React from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import { loginPaperStyle } from "../styles/LoginStyle";

function LoginPanel(){
    const theme = useTheme();

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.primary.light }} style={loginPaperStyle}>
                    <p className="p-3">Hello!</p>
                </Paper>
            </Grid>
        </>
    )
};

export default LoginPanel;