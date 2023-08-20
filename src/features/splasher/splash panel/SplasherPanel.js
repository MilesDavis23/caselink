import React, { useContext, useState } from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Button, ButtonBase } from "@mui/material";
import { loginPaperStyle } from "../../login/styles/LoginStyle";
import { Link  } from 'react-router-dom';

function SplasherPanel(){
    const theme = useTheme();

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.paper,  }} style={loginPaperStyle}>
                    <Grid container direction="column" justifyContent="center" alignItems='center' spacing={2} >
                        <Grid item xs={12} sx={{width:'100%'}}>
                            <Button component={Link} to='/login' variant='outlined' sx={{width:'100%'}} > Got to Login </Button>
                        </Grid>
                        <Grid item xs={12} sx={{width:'100%'}}>
                            <Button variant='outlined' sx={{width:'100%'}} > Register </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
};

export default SplasherPanel;