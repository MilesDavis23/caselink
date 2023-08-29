import React, { useContext, useState } from "react";
import {  useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Button, CircularProgress } from "@mui/material";
import { loginPaperStyle } from "../styles/LoginStyle";
import { AuthContext } from "../authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function LoginPanel(){
    const navigate = useNavigate();
    const theme = useTheme();
    const { login } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    /* handling the input changes:  */
    const handleEmailInputChange = (event) => {
        setEmail(event.target.value);
        console.log(email)
    };

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
    };
    
    function handleLogin(){
        setLoading(true);
        axios.post('http://localhost:3002/login', 
            {
                email, 
                password: showPassword ? password: undefined

            },
            
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        )
        .then(response => {
            setLoading(false);
            const data = response.data;
            if (data.message === 'Email is valid.') {
                setShowPassword(true);
            } else if (data.success) {
                if (data.role === 'lawyer') {
                    navigate('/lawyer')
                } else if ( data.role === 'client' ) {
                    navigate('/person');
                } else if (data.role === 'admin'){

                }

            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            setLoading(false);
            console.error('Error during login:', error);
            setError('An error occurred during login. ');
        });
    };

    return (
        <>
            <Grid align='center'>
                <Paper elevation={10} sx={{ background: theme.palette.background.paper,  }} style={loginPaperStyle}>
                    <Grid container direction="column" justifyContent="center" alignItems='center' spacing={2} >
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
                            <Grid item xs={12} sx={{ width: '100%'}}>
                                <span style={{ color: 'red' }}> {error} </span>
                            </Grid>
                        )}
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};

export default LoginPanel;