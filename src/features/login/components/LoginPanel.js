import React, { useState, useEffect } from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Button, CircularProgress, Typography, Alert } from "@mui/material";
import { loginPaperStyle } from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../functions/custom hooks/useRequest";
import loginUser from "../functions/fetch";


function LoginPanel(){
    const navigate = useNavigate();
    const theme = useTheme();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ passwordIncorrect, setPasswordIncorrect ] = useState(false);
    const { execute: executeLogin, loading, error } = useRequest(loginUser)

    /* handling the input changes:  */
    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
        console.log(email) 
    };

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
        setPasswordIncorrect(false);
    };
    
    const handleLogin = async () => {
        const data = await executeLogin(email, password, showPassword);
        if (data && data.message === 'Email is valid.') {
            setShowPassword(true);
        } else if (data && data.success) {
            if (data.message === 'Email is valid.') {
                setShowPassword(true);
            } else if (data.success) {
                if (data.role === 'lawyer') {
                    navigate('/lawyer/home-page')
                } else if ( data.role === 'client' ) {
                    navigate('/person/home-page');
                } else if (data.role === 'admin'){

                }

            } else {
                if (error && error.message === 'Invalid password.') {
                    setPasswordIncorrect(true);
                } else {
                    alert(data.message);
                }
            }
        }
    };
    useEffect(() => {
        if (error && error.message === 'Invalid password.') {
            setPasswordIncorrect(true);
        }
    }, [error]);



    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.paper }} style={loginPaperStyle}>
                    <Grid container direction="column" justifyContent="center" alignItems='center' spacing={2} >
                        {!showPassword && <Typography variant="p" sx={{ fontFamily: 'Canela', zIndex: 1, fontSize: 40}}> welcome back! </Typography> }
                        {showPassword && <Typography variant="p" sx={{ fontFamily: 'Canela', zIndex: 1, fontSize: 30}}> enter your password: </Typography> }
                        <Grid item sx={{width:'100%'}}>
                            <TextField  sx={{width:'100%'}} label="Email address" variant="outlined" value={email} onChange={handleEmailInputChange}></TextField>
                        </Grid>  
                        {showPassword && (
                                <Grid item sx={{ width: '100%' }}>
                                    <TextField sx={{width: '100%'}} label=" Enter Password" variant="outlined" type="password" value={password} onChange={handlePasswordInputChange} />
                                </Grid>
                        )}
                        <Grid item xs={12} sx={{ width: '100%' }}>
                            <Button variant='outlined' sx={{ width: '100%' }} onClick={handleLogin} disabled={loading}>
                                {loading ? <CircularProgress size={24} /> : 'LOGIN'}
                            </Button>
                        </Grid>
                        {error && !showPassword && (
                            <Grid item xs={12} sx={{ width: '100%', marginTop: 2, zIndex: 1 }}>
                                <Alert severity="error">{error.message}</Alert>
                            </Grid>
                        )}
                        {passwordIncorrect && showPassword && (
                            <Grid item xs={12} sx={{ width: '100%', marginTop: 2, zIndex: 1 }}>
                                <Alert severity="error">{error.message}</Alert>
                            </Grid>
                        )}
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default LoginPanel;