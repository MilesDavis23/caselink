import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CaseElement() {

    return (
        <Card >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    id: 45053535
                </Typography>
                <Typography variant='h5' component="div">
                    Stole My Cat
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Published:
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
                        <Grid item sx={{ color: '#FF7F11', ml: 2 }}>
                            Green
                        </Grid>
                    </Grid>
                </Typography>
                <CardActions>
                    <Button component={Link} to="/lawyer/case-page" variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default CaseElement;