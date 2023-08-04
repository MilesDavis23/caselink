import React from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import { Typography, Divider, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function BrowseCases() {

    return (
        <>
            <Grid container>
                <Grid item xs={9}> {/* Filter Section */}
                <Typography variant="h6" sx={{marginY: 3}}>Cases</Typography>
                    <Divider />
                    <Typography variant="subtitle1">Civil Law Cases</Typography>
                    <Divider />
                    <Grid container>
                        {/* Cases for Category 1 */}
                        <Grid item sx={{ padding: 2 }}>
                            <CaseElement />
                        </Grid>
                        <Grid item sx={{ padding: 2 }}>
                            <CaseElement />
                        </Grid>
                        <Grid item sx={{ padding: 2 }}>
                            <CaseElement />
                        </Grid>
                    </Grid>
                    <Typography variant="subtitle1">Criminal Law cases</Typography>
                    <Divider />
                    <Grid container>
                    <Grid item sx={{ padding: 2 }}>
                            <CaseElement />
                        </Grid>
                        <Grid item sx={{ padding: 2 }}>
                            <CaseElement />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}> {/* Cases Section */}
                <Typography variant="h6" sx={{marginY: 3}}>Filters</Typography>
                    <Divider />
                    <FormControl>
                        <InputLabel> Category </InputLabel>
                        <Select sx={{width: '250px'}} label="Category">
                        {/* Categories */}
                        <MenuItem value="category1"> Property Law </MenuItem>
                        <MenuItem value="category2"> Corporate Law </MenuItem>
                        <MenuItem value="category3"> Trademarks </MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    )
}

export default BrowseCases;