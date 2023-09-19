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
    Alert
} from '@mui/material';
import { Link } from 'react-router-dom';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import gandalf from '../../profile page/images/Screenshot 2023-08-04 at 1.28.06.png'
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '../../lawyer/mycases list/funtions/checkLink';
import { useForm, Controller } from 'react-hook-form'
import useRequest from '../../../functions/custom hooks/useRequest';
import { getCase, submitOffer, getOffersForUser } from '../functions/axios';
import { declineOffer, acceptOffer } from '../../person/accept offer/functions/handleOffers';
import useAddToMyCases from '../functions/useAddToMyCases';
import getToken from '../../../functions/handle token/ getToken';
import decodeToken from '../../../functions/handle token/decodeToken';



function IndividualCasePage() {
    /* check the end of the url */
    const query = useQuery();
    const from = query.get('from');
    /* useForm for getting the offer data from the user */
    const { control, handleSubmit, setValue, getValue } = useForm();
    const { caseId } = useParams();
    const theme = useTheme();
    const { execute, loading, data, error } = useRequest(() => getCase(caseId));
    const { isLoading, added, apiError, addToMyCases } = useAddToMyCases()
    const [isLawyer, setIsLawyer] = useState(false);
    const [isStatusCorrect, setIsStatusCorrect] = useState(false);
    /* state for checking if we are coming from my cases or not, as a lawyer */
    const [isFromMyCases, setIsFromMyCases] = useState(false);
    /* sending the offer as a lawyer: */
    const { execute: sendOfferRequest, loadingOffer, offer, offerError } = useRequest(submitOffer);
    /* useRequest to fetch the  offers for a specific case and show it to Person: */
    const {  execute: fetchOffers, loading: loadingOffers, data: offersData, error: offersError } = useRequest(() => getOffersForUser(caseId));
    useEffect(() => { fetchOffers() }, []);
    useEffect(() => { execute() }, [caseId]);
    /* check if lawyer: */
    const jwtoken = getToken('authToken');
    const payload = decodeToken(jwtoken);
    const userRole = payload.role;
    
    useEffect(() => {
        if (userRole === 'lawyer') {
            setIsLawyer(true);
        };
        if (data) {
            setIsStatusCorrect(data[0].status === 'added');
        };
        /* check if the site is reached from mycases */
        if (from === 'mycases') {
            setIsFromMyCases(true);
        };
    }, [caseId, userRole, data, from, isStatusCorrect]);
    /* helper function for form submit needed to offer send */
    const sendOffer = async (formData) => {
        const { offerAmmount, offerDescription } = formData;

        try {
            await sendOfferRequest(caseId, payload.userId, offerDescription, offerAmmount)
            console.log('offer sent successfully');
        } catch (error) {
            console.log('Error sending form data: ', error);
        }
    }
    if (loading) {
        return <p> Loading... </p>
    };
    if (error) {
        return <p> Error: {error.message} </p>
    };

    console.log(offersData)

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
                    <form onSubmit={handleSubmit(sendOffer)}>
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
                                            <Controller
                                                name="offerAmmount"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        id="standard-adornment-amount"
                                                        startAdornment={<InputAdornment position="start"> $ </InputAdornment>}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                        <Controller
                                            name="offerDescription"
                                            control={control}
                                            defaultValue="Your offer goes here..."
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    sx={{ width: '100%', margin: 1 }}
                                                    id="outlined-multiline-static"
                                                    label=""
                                                    multiline
                                                    rows={4}
                                                />
                                            )}
                                        />

                                        <Button variant='contained' type='submit' sx={{ width: 1, margin: 1 }} > Send Offer </Button>
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>

                    </form>
                }
                {!isLawyer && isStatusCorrect && (offersData && offersData.length > 0 && offersData[0].offerStatus !== 'declined' ? (
                    <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                        <Grid item xs={12}>
                            <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                                <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                                    <Typography variant="h6" component="div">
                                        Review Offer
                                    </Typography>
                                </Box>
                                <List sx={{ margin: 2 }}>
                                    <ListItem>
                                        <ListItemText primary="Offer Amount:" secondary={`$ ${offersData[0].offerPrice}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Offer Description:" secondary={offersData[0].offerDetails} />
                                    </ListItem>
                                    <Button variant='contained' sx={{ width: 1, margin: 1 }} onClick={() => acceptOffer(offersData[0].offerID, payload.userId, caseId)} > Accept Offer </Button>
                                    <Button variant='outlined' sx={{ width: 1, margin: 1 }} onClick={() => declineOffer(offersData[0].offerID, payload.userId, caseId)} > Decline Offer </Button>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Alert severity="info" sx={{margin: 2, widht: '100%'}}> No offer received yet. </Alert>
                ))}

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={5} sx={{ marginRight: 2, width: '100%' }}>
                        {isLawyer ? (
                            isFromMyCases ? (
                                <Button
                                    component={Link}
                                    to="/lawyer/my-cases/"
                                    variant='contained'
                                    sx={{ width: '230%', margin: 2 }}
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
                            <Button component={Link} to="/person/my-cases" variant='contained' sx={{ width: '230%', margin: 2 }}>
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
