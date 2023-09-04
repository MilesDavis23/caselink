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
import NavBar from '../../navbar/Navbar';
import { GlobalStyles } from '@mui/material'; 
import { loginPaperStyle } from '../../login/styles/LoginStyle';
import { Link } from 'react-router-dom';
import useRequest from '../../../functions/custom hooks/useRequest';
import registerUser from '../functions/fetch';

function Registration() {
    const theme = useTheme();

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [role, setRole] = React.useState('');
    const [profilePicURL, setProfilePicURL] = React.useState('');
    const [address, setAddress] = React.useState('');


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Enter Details', 'Upload Profile Picture', 'Confirm Registration'];

    const { execute: executeRegistration } = useRequest(registerUser);

    const handleRegistration = async() => {
        const data = await executeRegistration(username, email, password, role, profilePicURL, address);
        if (data.success) {
            alert(data.message);
            /* currently a ract dom element taking the user to the login section, even if the registration was successfull, and even if not */
        } else {
            alert('Registration failed. Please try again.');
        }
    }
    

    return (
        <>
            <GlobalStyles styles={{
                '*::-webkit-scrollbar': {
                    width: '0px',
                },
                '*::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                },
                '*::-webkit-scrollbar-thumb': {
                    background: '#888',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            }} />
            <NavBar />
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Grid container direction='column' justifyContent="center" alignItems="center" sx={{ height: '100%', flexWrap: 'nowrap' }}>

                    <Grid container direction='column' alignItems="flex-start" sx={{ width: '100%',  marginLeft: '250px' }}>
                        <Grid item style={loginPaperStyle} >
                            <h1 style={{ fontFamily: 'Canela', fontSize: '35px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%'  }}> 
                                Please follow the step to complete the registration! 
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

                        {activeStep === 0 && (
                            <>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
                                    <InputLabel>Role</InputLabel>
                                    <Select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        label="Role"
                                    >
                                        <MenuItem value="lawyer">Lawyer</MenuItem>
                                        <MenuItem value="client">Client</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    sx={{ marginBottom: 2 }}
                                />
                                <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)} sx={{ width: '100%' }}>
                                    Next
                                </Button>
                            </>
                        )}

                        {activeStep === 1 && (
                            <>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Avatar src={profilePicURL} sx={{ width: 160, height: 160 }} />
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Profile Picture URL"
                                        value={profilePicURL}
                                        onChange={(e) => setProfilePicURL(e.target.value)}
                                    />
                                    <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)} sx={{ width: '100%' }}>
                                        Next
                                    </Button>
                                </Box>
                            </>
                        )}

                        {activeStep === 2 && (
                            <>
                                <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                                    Confrim and proceed to login.
                                </Typography>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography><strong>Username:</strong> {username}</Typography>
                                    <Typography><strong>Email:</strong> {email}</Typography>
                                    <Typography><strong>Role:</strong> {role.charAt(0).toUpperCase() + role.slice(1)}</Typography>
                                    <Typography><strong>Profile Picture URL:</strong> {profilePicURL}</Typography>
                                    <Typography><strong>Address:</strong> {address}</Typography>
                                </Box>
                                <Button component={Link} to='/login' variant="contained" color="primary" onClick={handleRegistration} sx={{ width: '100%' }} >
                                    Confirm & Register
                                </Button>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Registration;
