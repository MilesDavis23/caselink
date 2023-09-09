import React from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import {  Divider, Grid } from "@mui/material";

function BrowseCases() {

    return (
        <>
            <Grid container sx={{width: '100%'}}>
                <Grid item xs={12} sx={{ marginBottom: 2, width: '100%' }}> 

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}> {/* Filter Section */}
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
            </Grid>
        </>
    )
}

export default BrowseCases;