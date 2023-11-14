
import React, { useContext, useEffect, useState } from "react";
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Chip, Input, Grid, Typography, ListItemText, Checkbox} from '@mui/material'
import { useTheme } from "@mui/material";
import CaseContext from "../context/caseContext";


const categoryList = ['Criminal', 'Civil', 'Labour', 'Property Law', 'Human Rigths', 'Traffic Law'];
const CategoryList = ({ filterCasesByCategory }) => {
    const [categoryInput, setCategoryInput] = useState([]);
    const handleChange = (event) => {
        const { target: { value } } = event;
        const newCategoryInput = typeof value === 'string' ? value.split(',') : value;
        setCategoryInput(newCategoryInput)
        console.log('categoryInput in filterPanel:' , categoryInput)
        filterCasesByCategory(newCategoryInput);
    };

    return (
        <FormControl sx={{ width: '100%'}}>
            <Select fullWidth sx={{width: '100%'}} multiple renderValue={(selected) => selected.join(', ')} onChange={handleChange} value={categoryInput} >
                {categoryList.map((category) => (

                    <MenuItem key={category} value={category}>
                        <Checkbox checked={categoryInput.indexOf(category) > -1}/>
                        <ListItemText primary={category} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};

const UploadDate = ({ sortFunction }) => {
    const handleSortChange = (event) => {
        sortFunction(event.target.value);

    }

    return (
        <FormControl fullWidth variant="filled" sx={{ mb: 2 }}>
            <InputLabel>Upload Date</InputLabel>
            <Select onChange={handleSortChange}>
                <MenuItem value="latest">Latest</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
        </FormControl>
    );
};

const SearchBar = ({ contextFunction }) => {
    const [searchInput, setSearchInput] = useState('');
    const handleTextInput = (event) => {

            event.preventDefault();
            const value = event.target.value.trim();
            console.log(value)
            setSearchInput(value)

    };
    console.log(searchInput)
    useEffect(() => { contextFunction(searchInput) }, [searchInput]);
    
    return (
        <TextField
            fullWidth
            variant="outlined"
            onChange={handleTextInput}
            label="Search"
            sx={{ mb: 2 }}
        />
    )
};

const Tags = ({ filterCasesByTags }) => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    console.log(tags);

    const handleSubmitKey = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const value = event.target.value.trim();
            if (value && !tags.includes(value)) {
                setTags([...tags, value]);
                setInputValue('');
            }
        }
    };
    const handleDelete = (tagToDelete) => () => {
        setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
    };
    useEffect(() => { filterCasesByTags(tags) }, [tags]);

    return (
        <>
            <FormControl fullWidth>
                <TextField
                    id="category-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleSubmitKey}
                    placeholder="Type and press 'Enter' to add categories"
                    fullWidth
                    margin="normal"
                    variant="standard"
                />
            </FormControl>
            {tags && tags.length > 0 && (
                <Box sx={{
                    backgroundColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0.5
                }} component="ul">
                    {tags.map((data) => (
                        <li key={data} sx={{margin: 1, paddingTop: 1}}>
                            <Chip
                                sx={{marginRight: 1, marginTop:1}}
                                label={data}
                                onDelete={handleDelete(data)}
                            />
                        </li>
                    ))}
                </Box>
            )}
        </>
    );
};

const FilterPanel = () => {
    const theme = useTheme();
    const { cases:data, loading, error, sortCasesByDate, filterCasesByCategory, filterCasesByTags, searchCasesByText  } = useContext(CaseContext);

    return (
        <>
            <Grid container direction='column' sx={{padding: 2}} spacing={2}>

                <Grid item>
                    <Typography variant="h6" >Filters</Typography>
                </Grid>

                <Grid item>
                    <SearchBar contextFunction={searchCasesByText} />
                </Grid>

                <Grid item>
                    <UploadDate sortFunction={sortCasesByDate} />
                </Grid>

                <Grid item>
                    <CategoryList filterCasesByCategory={filterCasesByCategory}/>
                </Grid>

                <Grid item>
                    <Tags filterCasesByTags={filterCasesByTags} />
                </Grid>

            </Grid>
        </>
    );
};

export default FilterPanel;