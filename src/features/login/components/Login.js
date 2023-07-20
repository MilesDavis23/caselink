import React from "react";
import {  useTheme } from '@mui/material/styles';
import Container from "@mui/material/Container";
import { Grid, Paper } from "@mui/material";
import { loginPanelStyle } from "../styles/LoginStyle";

function LoginPanel(){
    const theme = useTheme();

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{background:theme.palette.background.primary.light}} style={loginPanelStyle}>
                    <p className="p-3">Hello!</p>
                </Paper>
            </Grid>
        </>
    )
};

export default LoginPanel;