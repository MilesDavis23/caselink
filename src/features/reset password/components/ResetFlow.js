import React from 'react';
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
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Password } from '@mui/icons-material';

function ResetPasswordSteps() {
    const theme = useTheme();

    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    /* stepper logic:  */
    const [activeStep, setActiveStep] = React.useState('');
    const steps = ['Enter e-mail', 'Enter new password', 'Confirm Registration'];

    function handlerResetPassword() {
        /* stuff for reseting password comes here */
    };


    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.secondary, height: '100vh', overflow: 'auto' }}>
                <Grid container direction="column" alignItems="felx-start" sx={{ width: '100%', marginLeft: '250px' }}>
                    <Gird container>
                        <h1 style={{ fontFamily: 'Canela', fontSize: '35px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                            Enter e-mail to reset password!
                        </h1>
                    </Gird>
                </Grid>

                <Gird item sx={{ marginBottom: "30px", width: '80%', border: '1px solid white', borderRadius: '5px', padding: 2 }}>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 2 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === 0 && (
                        <>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ marginBottom: 2 }}
                            />
                            <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)} sx={{ width: '100%' }}>
                                Next
                            </Button>
                        </>
                    )}

                    {activeStep === 1 && (
                        <>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Enter password again"
                                valu={password}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                            <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)} sx={{ width: '100%' }}>
                                Next
                            </Button>
                        </>
                    )}

                    {activeStep === 2 && (
                        <>
                            <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                                Confrim and proceed to login.
                            </Typography>
                            <Button component={Link} to='/login' variant="contained" color="primary" onClick={handlerResetPassword} sx={{ width: '100%' }} >
                                    Confirm & Register
                            </Button>
                        </>
                    )}
                </Gird>
            </Box>
        </>
    )
}

export default ResetPasswordSteps;