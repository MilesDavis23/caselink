import React from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import { Typography, Divider, Grid } from "@mui/material";

function BrowseCases() {

    return (
        <>
            <Grid container sx={{width: '100%'}}>
                <Grid item xs={12} sx={{ marginBottom: 2, width: '100%' }}> 

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}> {/* Filter Section */}
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
            </Grid>
        </>
    )
}

export default BrowseCases;