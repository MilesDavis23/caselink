
import React, { useState } from "react";
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Chip, Input } from '@mui/material'


function FilterPanel() {
    const [ caseType, setCaseType ] = useState('');
    const [ tags, setTags ] = useState([]);

    const handleCaseTypeChange = (event) => {
        setCaseType(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value.split(','));
    };

    return (

            <Box sx={{ width: '100%', mt: 2 }}>
                {/* Dropdown for Case Types */}
                <FormControl fullWidth variant="filled" sx={{ mb: 2 }}>
                    <InputLabel>Case Type</InputLabel>
                    <Select
                        value={caseType}
                        onChange={handleCaseTypeChange}
                    >
                        <MenuItem value="civil">Civil</MenuItem>
                        <MenuItem value="criminal">Criminal</MenuItem>
                        {/* Add more case types as needed */}
                    </Select>
                </FormControl>

                {/* Filter based on Upload Date */}
                <FormControl fullWidth variant="filled" sx={{ mb: 2 }}>
                    <InputLabel>Upload Date</InputLabel>
                    <Select>
                        <MenuItem value="latest">Latest</MenuItem>
                        <MenuItem value="oldest">Oldest</MenuItem>
                    </Select>
                </FormControl>

                {/* Search Field */}
                <TextField
                    fullWidth
                    variant="filled"
                    label="Search"
                    sx={{ mb: 2 }}
                />

                {/* Tags (Chips) Selection */}
                <FormControl fullWidth variant="filled">
                    <InputLabel>Tags</InputLabel>
                    <Select
                        multiple
                        value={tags}
                        onChange={handleTagsChange}
                        input={<Input />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {/* Add your tags here */}
                        <MenuItem value="Tag1">Tag1</MenuItem>
                        <MenuItem value="Tag2">Tag2</MenuItem>
                        <MenuItem value="Tag3">Tag3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

    );
}

export default FilterPanel;