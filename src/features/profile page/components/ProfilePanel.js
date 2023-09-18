import React, { useEffect} from 'react';
import profilePicture from '../images/profile/spike-spiegel-189.jpg'
import { Avatar, Grid, Paper, Typography, Button  } from '@mui/material';
import useRequest from '../../../functions/custom hooks/useRequest';
import getUserData from '../../navbar/functions/axios';


function ProfilePanel() {
    const { execute, loading, data, error } = useRequest(getUserData)
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p> Loading.. </p>
    }
    if (error) {
        return <p> Error: {error.message} </p>
    }
    console.log(data);
    return (

        <>
            <Paper elevation={3} sx={{ width: '100%' }} justifyContent="center" alignItems="center">
                <Grid container sx={{ height: '100%' }}>
                    <Grid item xs={4} >
                        <Grid container sx={{ padding: 2 }}>
                            <Grid item xs={12}  >
                                <Avatar
                                    alt="Profile Picture"
                                    src={data && data[0].profile_img_url}
                                    sx={{ width: 166, height: 166, }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} justifyContent="center" alignItems="center" sx={{ padding: 2, height: '100%', width: '100%' }}>
                        <Grid container>
                            <Grid item xs={12} style={{ textAlign: 'justify' }} >
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {data && data[0].username}
                                </Typography>
                                <Typography variant="body1" sx={{ height: '50%', width: '100%', mt: 3 }}>
                                    Vivamus eu malesuada neque, vitae.
                                    Nullam sed ultricies leo.
                                    Praesent elit ut egestas hendrerit.
                                    Praesent elit ut egestas hendrerit.
                                </Typography>
                                <div className='d-flex justify-content-end'>
                                    <Button variant='contained' size='medium'> edit </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default ProfilePanel;