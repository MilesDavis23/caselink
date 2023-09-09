
import React, { useState } from "react";
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Chip, Input, Typography } from '@mui/material'
import { MenuProps, getStyles } from "../../individual case page/style/ChipStyle";
import { useTheme } from "@mui/material";


function FilterPanel() {
    /* Chip tags: */
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const names = [
        'Due payment',
        'ASAP',
        'English speaking',

    ];
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    return (
        <Box sx={{ width: '320px', mt: 2 /* now its set to a static 320px, but has to change it to dynamic layout, with mediaQuery */ }}  >

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
                variant="outlined"
                label="Search"
                sx={{ mb: 2 }}
            />

            {/* Tags (Chips) Selection */}

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
        </Box>

    );
}

export default FilterPanel;