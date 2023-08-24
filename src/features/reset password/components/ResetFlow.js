import React, { useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stepper,
    Step,
    StepLabel,
    TextField,
    Typography,
    Avatar
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { loginPaperStyle } from '../../login/styles/LoginStyle';
import { initiatePasswordReset, handleResetPassword } from '../functions/initiateEmail';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'

function ResetPasswordSteps() {
    const theme = useTheme();
    const [ searchParams ] = useSearchParams();
    const token = searchParams.get('token');

    /* capture the email: */
    const [email, setEmail] = React.useState('');

    /* capture the password: */
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState(''); 

    /* stepper logic:  */
    const [activeStep, setActiveStep] = React.useState(0);

    /* handle uniqe page: */
    useEffect(() => {
        if (token) {
            setActiveStep(2);
        }
    },[token]);

    const steps = ['Enter e-mail', 'Check your e-mails!',  'Enter new password', 'Confirm Registration'];

    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary, height: '100vh', overflow: 'auto' }}>

                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap' }}>

                    <Grid container direction='column' alignItems="flex-start" sx={{ width: '100%', marginLeft: '330px' }}>
                        <Grid item styte={loginPaperStyle}>
                            <h1 style={{ fontFamily: 'Canela', fontSize: '35px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                                Enter e-mail to reset password!
                            </h1>
                        </Grid>
                    </Grid>


                    <Grid item sx={{ marginBottom: "30px", width: '80%', border: '1px solid white', borderRadius: '5px', padding: 2 }}>
                        <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 2 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        {activeStep === 0 && !token && (
                            <>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <Button variant="contained" color="primary" onClick={() => initiatePasswordReset(setActiveStep, email)} sx={{ width: '100%' }}>
                                    Next
                                </Button>
                            </>
                        )}

                        {activeStep === 1 && (
                            <>
                                                                
                                <Typography varaitn='h6' component='div' sx={{ marginBottom: 2 }}>
                                    Check your email!
                                </Typography>

                                <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev - 1)}  sx={{ width: '100%' }}>
                                    Back
                                </Button>
                            </>
                        )}

                        {activeStep === 2 && token && (

                                <>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Enter new password"
                                        sx={{ marginBottom: 2 }}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Enter new password again"
                                        sx={{ marginBottom: 2 }}
                                        value={rePassword}
                                        onChange={(e) => setRePassword(e.target.value)}
                                    />

                                    <Button variant="contained" color="primary" onClick={() => handleResetPassword(setActiveStep, token, password)} sx={{ width: '100%', marginBottom: 1 }}>
                                        Next
                                    </Button>

                                </>

                            ) 

                        }

                        {activeStep === 3 && (
                            <>
                                <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                                    Confrim and proceed to login.
                                </Typography>

                                <Button component={Link} to='/login' variant="contained" color="primary"  sx={{ width: '100%', marginBottom: 1 }} >
                                    Confirm & Go To Login
                                </Button>

                                <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev - 1)} sx={{ width: '100%' }}>
                                    Back
                                </Button>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ResetPasswordSteps;