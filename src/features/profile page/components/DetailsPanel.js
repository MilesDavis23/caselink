import React, {useEffect} from 'react';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid, Paper, Button, Typography } from '@mui/material';
import useRequest from '../../../functions/custom hooks/useRequest';
import { getUserData } from '../../navbar/functions/axios';


function DetailsPanel() {
    const { execute, loading, data, error } = useRequest(getUserData)
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p> Loading.. </p>
    }
    if (error) {
        return <p> Error: {error.message} </p>
    }
    return (
        <>
            <Paper elevation={3} sx={{ padding: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} container alignItems="center">
                        <EmailIcon />
                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                            <strong> {data && data[0].email} </strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container alignItems="center">
                        <HomeIcon />
                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                            <strong>{data && data[0].address}</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container alignItems="center">
                        <WorkIcon />
                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                            <strong>Specialization:</strong> {data && data[0].role}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container alignItems="center">
                        <VerifiedIcon />
                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                            <strong>Certified by XYZ Institute</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container alignItems="center">
                        <WhatsAppIcon />
                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                            <strong>+123 456 7890</strong>
                        </Typography>
                    </Grid>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}>
                        <Button variant='contained' size='medium'> edit </Button>
                    </div>
                </Grid>
            </Paper>
        </>
    )
}

export default DetailsPanel;
