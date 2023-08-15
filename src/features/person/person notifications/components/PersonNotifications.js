import * as React from 'react';
import { 
    Grid,
    Card,
    CardActions, 
    CardContent,
    Typography,
    Button, 
} from '@mui/material';
import { Link } from 'react-router-dom'
import NotificationElement from '../../../lawyer/notifications/components/NotificationElement';


function PersonNotificationsList(){
    return (
        <>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <NotificationElement />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Grid container>
                        <Grid item>
                            Notification Id: 242342424
                        </Grid>
                        <Grid item sx={{ml: 2}}>
                            Title: Received Offer for Case No. 231414
                        </Grid>
                    </Grid>
                </Typography>
                <Typography variant="body2">
                    Vivamus eu malesuada neque, vitae tempor nulla. Quisque efficitur elit vitae nulla pulvinar, 
                    sed faucibus tellus semper. Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                </Typography>
                <CardActions>
                    <Button component={ Link } to="/person/offer-received" variant="outlined" size='small' sx={{width:'100%'}} > Go To Case </Button>
                </CardActions>
            </CardContent>
        </Card>
                </Grid>
            </Grid>
        </>
    )
};

export default PersonNotificationsList;