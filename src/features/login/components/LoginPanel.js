import React, { useContext, useState } from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Button, ButtonBase } from "@mui/material";
import { loginPaperStyle } from "../styles/LoginStyle";
import { AuthContext } from "../authentication/AuthContext";

function LoginPanel(){
    const theme = useTheme();
    const { login } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');

    const handleTextInputChange = (event) => {
        setEmail(event.target.value)
        console.log(email)
    };

    function handleLogin(){
        if (email === 'admin'){
            login()
        };
    }

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.paper,  }} style={loginPaperStyle}>
                    <Grid container direction="column" justifyContent="center" alignItems='center' spacing={2} >
                        <Grid item sx={{width:'100%'}}>
                            <TextField id="" sx={{width:'100%'}} label="Email address" variant="outlined" value={email} onChange={handleTextInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12} sx={{width:'100%'}}>
                            <Button variant='outlined' sx={{width:'100%'}} onClick={handleLogin} > LOGIN </Button>
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