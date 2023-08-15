import * as React from 'react';
import {
    Grid,
    Card, 
    CardContent,
    CardActions,
    Typography, 
    Button, 
} from '@mui/material';
import { Link } from 'react-router-dom';

function PersonMyCaseList() {
    return (
        <>
            <Grid container>
                <Grid item sx={{ padding: 2 }}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                id: 34134141
                            </Typography>
                            <Typography variant='h5' component="div">
                                My tenants not paying the rent. 
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Published: 2023.12.11.
                            </Typography>
                            <Typography variant="body2">
                                Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                                <br />
                            </Typography>
                            <Typography>
                                <Grid container>
                                    <Grid item>
                                        Status:
                                    </Grid>
                                    <Grid item sx={{ color: '#91ADC2', ml: 2 }}>
                                        Published
                                    </Grid>
                                </Grid>
                            </Typography>
                            <CardActions>
                                <Button component={Link} to="/person/case-page" variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ padding: 2 }}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                id: 45053535
                            </Typography>
                            <Typography variant='h5' component="div">
                                I received a FMH.
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Published: 2022.12.22
                            </Typography>
                            <Typography variant="body2">
                                Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                                <br />
                                {'please help'}
                            </Typography>
                            <Typography>
                                <Grid container>
                                    <Grid item>
                                        Status:
                                    </Grid>
                                    <Grid item sx={{ color: '#F77F00', ml: 2 }}>
                                        Offer received
                                    </Grid>
                                </Grid>
                            </Typography>
                            <CardActions>
                                <Button component={Link} to="/person/offer-received" variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sx={{ padding: 2 }}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                id: 34134141
                            </Typography>
                            <Typography variant='h5' component="div">
                                My tenants not paying the rent. 
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Published: 2023.12.11.
                            </Typography>
                            <Typography variant="body2">
                                Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                                <br />
                            </Typography>
                            <Typography>
                                <Grid container>
                                    <Grid item>
                                        Status:
                                    </Grid>
                                    <Grid item sx={{ color: '#3EC300', ml: 2 }}>
                                        Active
                                    </Grid>
                                </Grid>
                            </Typography>
                            <CardActions>
                                <Button component={Link} to="/person/active-case-page" variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item sx={{ padding: 2 }}>
                    <Card >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                id: 45053535
                            </Typography>
                            <Typography variant='h5' component="div">
                                Insurance company not paying
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Published: 2012.12.11.
                            </Typography>
                            <Typography variant="body2">
                                Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate. Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet. Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem. In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium. Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida. Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt. Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum. Nunc blandit tortor congue odio convallis mollis.
                                <br />
                            </Typography>
                            <Typography>
                                <Grid container>
                                    <Grid item>
                                        Status:
                                    </Grid>
                                    <Grid item sx={{ color: '#D62828', ml: 2 }}>
                                        Closed
                                    </Grid>
                                </Grid>
                            </Typography>
                            <CardActions>
                                <Button component={Link} to="/lawyer/send-offer-case-page" variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonMyCaseList;