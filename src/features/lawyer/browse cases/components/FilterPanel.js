
import React, { useState } from "react";
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Chip, Input, Grid, Typography} from '@mui/material'
import { MenuProps, getStyles } from "../../individual case page/style/ChipStyle";
import { useTheme } from "@mui/material";

const CategoryList = () => (
    <FormControl sx={{ width: '100%' }}>
        <InputLabel> Category </InputLabel>
        <Select sx={{ width: '100%' }} label="Category">
            <MenuItem value="category1"> Property Law </MenuItem>
            <MenuItem value="category2"> Corporate Law </MenuItem>
            <MenuItem value="category3"> Trademarks </MenuItem>
        </Select>
    </FormControl>
);

const UploadDate = () => (
    <FormControl fullWidth variant="filled" sx={{ mb: 2 }}>
        <InputLabel>Upload Date</InputLabel>
        <Select>
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
    </FormControl>
);

const SearchBar = () => (
    <TextField
        fullWidth
        variant="outlined"
        label="Search"
        sx={{ mb: 2 }}
    />
);

const Tags = ({personName , setPersonName, theme}) => {
    const names = [ 'Due Payment', 'ASAP', 'English speaking'];
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        )
    };
    return (
        <FormControl sx={{ width: '100%' }}>
            <Select
                labelId="demo-multiple-chip-labe"
                id=''
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, overflow: 'auto' }}>
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
    );
};

const FilterPanel = () => {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    return (
        <>
            <Grid container direction='column' sx={{padding: 2}} spacing={2}>

                <Grid item>
                    <Typography variant="h6" >Filters</Typography>
                </Grid>

                <Grid item>
                    <CategoryList/>
                </Grid>

                <Grid item>
                    <UploadDate/>
                </Grid>

                <Grid item>
                    <SearchBar/>
                </Grid>

                <Grid item>
                    <Tags personName={personName} setPersonName={setPersonName} theme={theme}/>
                </Grid>

            </Grid>
        </>
    )
}

export default FilterPanel;