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
} from '@mui/material';
import { Link } from 'react-router-dom';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import gandalf from '../../profile page/images/Screenshot 2023-08-04 at 1.28.06.png'

function IndividualCasePage() {

    return (
        <>
            <Container justifyContent='center' alignItems="" sx={{ padding: 2, width: '70%' }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid white', paddingBottom: 2 }}>
                    <Grid item xs={6}>
                        <Typography variant='h5' component="div">
                            Someone stole my cat
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
                        <Grid item>
                            <Avatar src={gandalf} sx={{ width: 30, height: 30, marginRight: 2 }}></Avatar>
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
                            <List sx={{marginLeft: 5}}>
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

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={5} sx={{marginRight: 2}}>
                        <Button variant='contained' sx={{ width: 1 }} > Back </Button>
                    </Grid>
                    <Grid item xs={5} sx={{marginRight: 0}}>
                        <Button component={Link} to="/lawyer/my-cases/" variant='contained' sx={{ width: 1 }}> Add To My Cases </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default IndividualCasePage;
