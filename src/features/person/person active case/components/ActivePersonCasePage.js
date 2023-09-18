import * as React from 'react';
import {
    Grid,
    Container,
    Typography,
    Avatar,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    TextField,

    Chip,
    Stepper, 
    Step, 
    StepLabel 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';


function PersonActiveCasePage() {

    /* 'Chip' logic:  */
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const names = [
        'Rental Contract',
        'ID Copy',
        'Authorization',
        'Copy of passport'
    ];

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    /* Messages for message board dummy: */
    const messages = [
        { sender: 'Gandalf Jones', text: 'Hello! How can I help you with your case?' },
        { sender: 'You', text: 'I need some advice regarding the documents I uploaded.' },
        { sender: 'Gandalf Jones', text: `Sure, I've reviewed them. Let's discuss further.` }
    ];

    /* stepper: */
    const steps = ['Offer Sent', 'Offer Accepted', 'Procedure Started', 'Case Resolved'];

    const [activeStep, setActiveStep] = React.useState(2); // Assuming 'Procedure Started' is the current active step



    return (
        <>
            <Container justifyContent='center' alignItems="" sx={{ padding: 2, width: '100%' }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid white', paddingBottom: 2 }}>
                    <Grid item xs={6}>
                        <Typography variant='h5' component="div">
                            Someone stole my cat
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                        <Grid item>
                            <Avatar sx={{ width: 30, height: 30, marginRight: 2 }}></Avatar>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Gandalf Jones
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item>
                        <Typography variant="body2">
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
                            <Box sx={{ padding: 1 }}></Box>
                            {'So this is part is very importan.'}
                            <Box sx={{ padding: 2 }}></Box>
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
                            <Box sx={{ padding: 0.5 }}></Box>
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                                <Typography variant="h6" component="div">
                                    Uploaded Documents
                                </Typography>
                            </Box>
                            <List sx={{ marginLeft: 5 }}>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LibraryBooksSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Rental Contract" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LibraryBooksSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Authorization" />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <LibraryBooksSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Title Deed" />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }}>
                                <Typography variant="h6" component="div">
                                    Messaging Board
                                </Typography>
                            </Box>
                            <List>
                                {messages.map((message, index) => (
                                    <ListItem key={index} sx={{ flexDirection: message.sender === 'You' ? 'row-reverse' : 'row' }}>
                                        <Box sx={{
                                            padding: 1,
                                            borderRadius: 1,
                                            bgcolor: message.sender === 'You' ? 'primary.main' : 'grey.300',
                                            color: 'black',
                                            maxWidth: '70%',
                                            wordBreak: 'break-word'
                                        }}>
                                            <Typography variant="body2">
                                                {message.text}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Type your message..."
                                />
                                <Box sx={{ marginTop: 1 }}>
                                    <Button sx={{ width: '100%' }} variant="contained" color="primary">
                                        Send
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                                <Typography variant="h6" component="div">
                                    Request file upload
                                </Typography>
                            </Box>
                            <List sx={{ margin: 2 }}  >

                                {/* Chips representing the requested files */}
                                <Typography> Files requested to upload: </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, marginBottom: 2 }}>
                                    {names.map((name) => (
                                        <Chip key={name} label={name} />
                                    ))}
                                </Box>

                                {/* Dropbox area */}
                                <Box sx={{ border: '2px dashed grey', borderRadius: '5px', padding: 2, textAlign: 'center', marginBottom: 2 }}>
                                    Drop files here
                                </Box>

                                <Button variant='contained' sx={{ width: 1, margin: 1 }} > Upload </Button>

                            </List>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }}>
                                <Typography variant="h6" component="div">
                                    Case History
                                </Typography>
                            </Box>
                            <Stepper activeStep={activeStep} alternativeLabel sx={{padding: 2}}>
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                            <Grid container justifyContent='space-between'>
                                <Grid item>
                                    <Typography variant="h6" component="div">
                                        Current Status: 
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ color: '#3EC300', ml: 4 }}>
                                    <Typography variant="h6" component="div">
                                        Active
                                    </Typography>
                                </Grid>
                            </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={12} sx={{ margin: 2 }}>
                        <Button component={Link} to="/lawyer/my-cases/" variant='contained' sx={{ width: 1 }}> Back </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ margin: 2 }}>
                        <Button component={Link} to="/lawyer/my-cases/" variant='contained' sx={{ width: 1 }}> Withdraw Case </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default PersonActiveCasePage;
