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
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
import gandalf from '../../profile page/images/Screenshot 2023-08-04 at 1.28.06.png'
import { MenuProps, getStyles } from '../style/ChipStyle';



function SendOfferCasePage() {

    /* 'Chip' logic:  */
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const names = [
        'Rental Contract',
        'ID Copy',
        'Authorization',
        'Copy of passport'
    ];

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Container justifyContent='center' alignItems="" sx={{ padding: 2, width: '100%' }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid white', paddingBottom: 2 }}>
                    <Grid item xs={6}>
                        <Typography variant='h5' component="div">
                            Someone stole my cat
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
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
                            <Box sx={{ padding: 1 }}></Box>
                            {'So this is part is very importan.'}
                            <Box sx={{ padding: 2 }}></Box>
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
                            <Box sx={{ padding: 0.5 }}></Box>
                            Vivamus eu malesuada neque, vitae tempor nulla.
                            Quisque efficitur elit vitae nulla pulvinar, sed faucibus tellus semper.
                            Nullam sed ultricies leo. Morbi elementum tellus et enim egestas vulputate.
                            Pellentesque rutrum orci sit amet ante eleifend mollis. Ut aliquet nisl felis, eget tempor ipsum hendrerit sit amet.
                            Praesent aliquet elit ut egestas hendrerit. In vitae nunc aliquet, finibus purus a, pellentesque lorem.
                            In magna libero, interdum eget scelerisque non, porta ac nibh. Vestibulum iaculis mi ac libero convallis pretium.
                            Nunc vehicula lectus et sapien dictum, ut venenatis quam gravida.
                            Vivamus elementum egestas eleifend. Sed semper magna vitae tortor aliquam tincidunt.
                            Nulla ut urna tempus, rhoncus orci ac, tempus risus. Donec condimentum lacus dui, eget congue felis elementum bibendum.
                            Nunc blandit tortor congue odio convallis mollis.
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

                                <FormControl sx={{ m: 1, width: '100%' }}>
                                    <InputLabel > Upload request: </InputLabel>
                                    <Select
                                        labelId="demo-multiple-chip-labe"
                                        id=''
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>


                                <Button variant='contained' sx={{ width: 1, margin: 1 }} > Send Offer </Button>
                            </List>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={12} sx={{ marginRight: 0 }}>
                        <Button component={Link} to="/lawyer/my-cases/" variant='contained' sx={{ width: 1 }}> Back </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default SendOfferCasePage;
