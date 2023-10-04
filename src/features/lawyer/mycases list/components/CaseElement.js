import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getUserData from '../../../navbar/functions/axios';
import useRequest from '../../../../functions/custom hooks/useRequest';
import  Avatar  from '@mui/material/Avatar';
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

    const cookie = 'authToken'
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
        <Card>
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant='h5' component="div">
                            {data && data.title}
                        </Typography>
                    </Grid>
                    {/* Avatar goes here */}
                </Grid>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    case id: {data && data.case_id}
                </Typography>
                <Typography variant="body1">
                    {isBrowseCasesPage && data && data.brief_description}
                    {!isBrowseCasesPage && data && data.detailed_description}
                    <br />
                </Typography>
                <Typography>
                    <strong>categories: </strong>{data && typeof data.case_category === 'string' ? JSON.parse(data.case_category).join(', ') : data.case_category}
                </Typography>
                {data.status && !isBrowseCasesPage && (
                    <Typography>
                        <Grid container>
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
    );
    
};

export default CaseElement;