import React from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Button, ButtonBase } from "@mui/material";
import { loginPaperStyle } from "../styles/LoginStyle";

function LoginPanel(){
    const theme = useTheme();

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.paper,  }} style={loginPaperStyle}>
                    <Grid container direction="column" justifyContent="center" alignItems='center' spacing={2} >
                        <Grid item sx={{width:'100%'}}>
                            <TextField id="" sx={{width:'100%'}} label="Email address" variant="outlined"></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{width:'100%'}}>
                            <Button variant='outlined' sx={{width:'100%'}}> LOGIN </Button>
                        </Grid>
                        <Grid item xs={12} sx={{width:'100%'}}>
                            <Button variant='outlined' sx={{width:'100%'}} > REGISTER </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
};

export default LoginPanel;