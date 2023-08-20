import React from 'react';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
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
import { GlobalStyles } from '@mui/material'; // Make sure to import these from the correct paths
import { loginPaperStyle } from '../../login/styles/LoginStyle';

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

    function handleRegistration() {
        fetch('http://localhost:3002/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                role,
                profilePicURL,
                address
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);

            } else {
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
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
                    <Grid item style={{ ...loginPaperStyle, fontFamily: 'Canela', fontSize: '50px' }} textAlign='center'>
                        <h1>Welcome!</h1>
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
                                <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)}>
                                    Next
                                </Button>
                            </>
                        )}

                        {activeStep === 1 && (
                            <>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Avatar src={profilePicURL} sx={{ width: 60, height: 60 }} />
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Profile Picture URL"
                                        value={profilePicURL}
                                        onChange={(e) => setProfilePicURL(e.target.value)}
                                    />
                                    <Button variant="contained" color="primary" onClick={() => setActiveStep((prev) => prev + 1)}>
                                        Next
                                    </Button>
                                </Box>
                            </>
                        )}

                        {activeStep === 2 && (
                            <>
                                <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
                                    Confirm your registration details and proceed.
                                </Typography>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography><strong>Username:</strong> {username}</Typography>
                                    <Typography><strong>Email:</strong> {email}</Typography>
                                    <Typography><strong>Role:</strong> {role.charAt(0).toUpperCase() + role.slice(1)}</Typography>
                                    <Typography><strong>Profile Picture URL:</strong> {profilePicURL}</Typography>
                                    <Typography><strong>Address:</strong> {address}</Typography>
                                </Box>
                                <Button variant="contained" color="primary" onClick={handleRegistration}>
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
