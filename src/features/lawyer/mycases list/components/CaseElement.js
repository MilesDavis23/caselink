import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CaseElement( {data} ) {
    return (
        <Card >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    case id: {data && data.case_id}
                </Typography>
                <Typography variant='h5' component="div">
                    {data && data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Published:
                </Typography>
                <Typography variant="body2">
                    {data && data.detailed_description}
                    <br />
                    {'please help'}
                </Typography>

                {data.status && (
                    <Typography>
                        <Grid container>
                            {/* need a different element for browse cases */}
                            <Grid item>
                                Status:
                            </Grid>
                            <Grid item sx={{ color: '#FF7F11', ml: 2 }}>
                                Green
                            </Grid>
                        </Grid>
                    </Typography>
                )}
                <CardActions>
                    <Button component={Link} to={`/person/case-page/${data && data.case_id}`} variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default CaseElement;