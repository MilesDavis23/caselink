import * as React from 'react';
import {
    Grid,
    Container,
    Typography,
    Box,
    Button,
    TextField,
    FormControl,
    Select,
    OutlinedInput, 
    Chip,
    MenuItem,
    InputLabel
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { MenuProps, getStyles } from '../../../lawyer/individual case page/style/ChipStyle';



function MakeACase() {

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
            <Container justifyContent='center' alignItems="" sx={{ padding: 2, width: '70%' }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid white', paddingBottom: 2 }}>
                    <Grid item xs={12}>
                    <TextField
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={1}
                                    placeholder="Enter title..."
                                />
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                    <TextField
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    placeholder="Explain your problem..."
                                />
                    </Grid>
                </Grid>

                <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                    <Grid item xs={12}>
                        <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                            <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                                <Typography variant="h6" component="div">
                                    Upload Documents
                                </Typography>
                            </Box>
                            <FormControl sx={{ m: 0, width: '100%' }}>
                                    <InputLabel htmlFor="select-multiple-chip" style={{ visibility: 'hidden' }}>Hidden Label</InputLabel>
                                    <Select
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
                        </Box>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }} >
                    <Grid item xs={12} sx={{ marginRight: 0 }}>
                        <Button component={Link} to="" variant='contained' sx={{ width: 1 }}> Submit Case </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default MakeACase;
