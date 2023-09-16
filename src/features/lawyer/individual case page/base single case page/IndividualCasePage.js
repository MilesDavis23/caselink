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
import gandalf from '../../lawyer/profile page/images/Screenshot 2023-08-04 at 1.28.06.png'
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useRequest from '../../../functions/custom hooks/useRequest';
import getCase from '../functions/axios';
import useAddToMyCases from '../functions/useAddToMyCases';


function IndividualCasePage() {
    const { caseId } = useParams();
    const theme = useTheme();
    const { execute, loading, data, error }  = useRequest(() => getCase(caseId));
    const { isLoading, added, apiError, addToMyCases } = useAddToMyCases()
    console.log(data)
    useEffect(() => { execute() }, [caseId]);
    if (loading) {
        return <p> Loading... </p>
    }; 
    if (error) {
        return <p> Error: {error.message} </p>
    };

    return (
        <>
            <Container justifyContent='center' alignItems="" sx={{ padding: 2, width: '100%' }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid white', paddingBottom: 2 }}>
                    <Grid item xs={6}>
                        <Typography variant='h5' component="div">
                            {data && data[0].title}
                        </Typography>
                        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                            case id: {data && data[0].case_id}
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
                            {data && data[0].detailed_description}
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
                        <Button component={Link} to="/lawyer/my-cases/" onClick={() => addToMyCases(caseId)} variant='contained' sx={{ width: 1 }}> {isLoading ? 'Adding...' : 'Add To My Cases'} </Button>
                    </Grid>
                    {added && <p> Case added to your list! </p>}
                    {apiError && <p> Error: {apiError} </p>}
                </Grid>
            </Container>
        </>
    )
};

export default IndividualCasePage;
