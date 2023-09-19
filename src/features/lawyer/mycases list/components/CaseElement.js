import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import getColor from '../funtions/getStatusColor';
import { getLinkBasedOnRole } from '../funtions/getLink';
import { useIsFromBrowseCases } from '../funtions/checkLink';
import decodeToken from '../../../../functions/handle token/decodeToken';
import getToken from '../../../../functions/handle token/ getToken';

function CaseElement({ data }) {
    const [isBrowseCasesPage, setIsBrowseCasesPage] = useState(false);
    const areWeAtBrowseCases = useIsFromBrowseCases();

    useEffect(() => {
        setIsBrowseCasesPage(areWeAtBrowseCases);
    }, [areWeAtBrowseCases]);

    const cookie = 'authToken';
    const link = getLinkBasedOnRole(cookie);
    /* check user: */
    const jwtoken = getToken('authToken');
    const payload = decodeToken(jwtoken);
    const userRole = payload.role;

    let clinetStatus;
    if (userRole === 'client') {
        if (data && data.status === 'added'){
            clinetStatus = 'submitted'
        } else if ( data && data.status === 'offer sent'){
            clinetStatus = 'offer received'
        } else {
            clinetStatus = data.status
        }
    }

    console.log(userRole === 'client')
    
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

                {data.status && !isBrowseCasesPage && (
                    <Typography>
                        <Grid container>
                            {/* need a different element for browse cases */}
                            <Grid item>
                                Status:
                            </Grid>
                            <Grid item sx={{ ...getColor(data.status), ml: 2 }}>
                                {userRole === 'client' ? clinetStatus : data.status}
                            </Grid>
                        </Grid>
                    </Typography>
                )}

                <CardActions>
                    {!isBrowseCasesPage && <Button component={Link} to={`${link}/${data && data.case_id}?from=mycases`} variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>}
                    {isBrowseCasesPage && <Button component={Link} to={`${link}/${data && data.case_id}`} variant="outlined" size='small' sx={{ width: '100%' }} > Go To Case </Button>}
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default CaseElement;