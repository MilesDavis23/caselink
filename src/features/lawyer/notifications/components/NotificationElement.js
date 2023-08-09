import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function NotificationElement() {

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Grid container>
                        <Grid item>
                            Notification Id: 242342424
                        </Grid>
                        <Grid item sx={{ml: 2}}>
                            Title: Received notification
                        </Grid>
                    </Grid>
                </Typography>
                <Typography variant="body2">
                    Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, 
                    sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                    <br />
                    {'please help'}
                </Typography>
                <CardActions>
                    <Button component={ Link } to="/lawyer/case-page" variant="outlined" size='small' sx={{width:'100%'}} > Go To Cases </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default NotificationElement;