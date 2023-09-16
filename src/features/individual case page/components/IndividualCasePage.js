import React, { useState } from 'react';
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
    TextField,
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    MenuItem,
    Select,
    Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import gandalf from '../../lawyer/profile page/images/Screenshot 2023-08-04 at 1.28.06.png'
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../../lawyer/mycases list/funtions/checkLink';
import useRequest from '../../../functions/custom hooks/useRequest';
import getCase from '../functions/axios';
import useAddToMyCases from '../functions/useAddToMyCases';
import getToken from '../../../functions/handle token/ getToken';
import decodeToken from '../../../functions/handle token/decodeToken';


function IndividualCasePage() {
    /* check the end of the url */
    const query = useQuery();
    const from = query.get('from');

    const { caseId } = useParams();
    const theme = useTheme();
    const { execute, loading, data, error } = useRequest(() => getCase(caseId));
    const { isLoading, added, apiError, addToMyCases } = useAddToMyCases()
    const [isLawyer, setIsLawyer] = useState(false);
    const [isStatusCorrect, setIsStatusCorrect] = useState(false);
    /* state for checking if we are coming from my cases or not, as a lawyer */
    const [isFromMyCases, setIsFromMyCases] = useState(false);
    useEffect(() => { execute() }, [caseId]);
    /* check if lawyer: */
    const jwtoken = getToken('authToken');
    const payload = decodeToken(jwtoken);
    const userRole = payload.role;
    useEffect(() => {
        if (userRole === 'lawyer') {
            setIsLawyer(true);
        }
        if (data) {
            setIsStatusCorrect(data[0].status === 'added');
        }
        if (from === 'mycases') {
            setIsFromMyCases(true);
        }
    }, [caseId, userRole, data, from]);
    if (loading) {
        return <p> Loading... </p>
    };
    if (error) {
        return <p> Error: {error.message} </p>
    };
    console.log(isLawyer)
    /* Preciously on this project:
    modifed this component, to check the cookie for lawyer role / .status, so the offer panel appears, 
    if both are coorect  */

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
                            <List sx={{ marginLeft: 5 }}>
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

                {isLawyer && isStatusCorrect && isFromMyCases &&
                    <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                        <Grid item xs={12}>
                            <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                                <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                                    <Typography variant="h6" component="div">
                                        Send Offer
                                    </Typography>
                                </Box>
                                <List sx={{ margin: 2 }}  >
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Offer Amount</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl>
                                    <TextField
                                        sx={{ width: '100%', margin: 1 }}
                                        id="outlined-multiline-static"
                                        label=""
                                        multiline
                                        rows={4}
                                        defaultValue="Your offer goes here..."
                                    />

                                    <Button variant='contained' sx={{ width: 1, margin: 1 }} > Send Offer </Button>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                }
                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={5} sx={{ marginRight: 2, width: '100%' }}>
                        {isLawyer ? (
                            isFromMyCases ? (
                                <Button
                                    component={Link}
                                    to="/lawyer/my-cases/"
                                    variant='contained'
                                    sx={{ width: '100%', margin: 2 }}
                                >
                                    Back
                                </Button>
                            ) : (
                                <Button
                                    component={Link}
                                    to="/lawyer/browse-cases"
                                    variant='contained'
                                    sx={{ width: '100%', margin: 2 }}
                                >
                                    Back
                                </Button>
                            )
                        ) : (
                            <Button component={Link} to="/person/my-cases" variant='contained' sx={{ width: '100%', margin: 2 }}>
                                Back
                            </Button>
                        )}
                    </Grid>

                    {!isFromMyCases &&
                        <Grid item xs={5} sx={{ marginRight: 0, width: '100%' }}>
                            <Button
                                component={Link}
                                to="/lawyer/my-cases/"
                                onClick={() => addToMyCases(caseId)}
                                variant='contained'
                                sx={{ width: '100%' }}
                            >
                                {isLoading ? 'Adding...' : 'Add To My Cases'}
                            </Button>
                        </Grid>
                    }
                    {added && <p> Case added to your list! </p>}
                    {apiError && <p> Error: {apiError} </p>}
                </Grid>
            </Container>
        </>
    )
};

export default IndividualCasePage;
