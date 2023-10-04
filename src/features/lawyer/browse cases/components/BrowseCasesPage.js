import React, { useEffect } from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import { Alert, Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useRequest from "../../../../functions/custom hooks/useRequest";
import getAllCases from "../functions/axios";

function BrowseCases() {
    const theme = useTheme();
    const { execute, data, loading, error } = useRequest(getAllCases);
    console.log(data)
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <Alert severity="error" sx={{ padding: 2}}> Error: {error.message} </Alert>;
    }

    return (

        <>
            <Grid container sx={{ width: '100%' }}>
                <Grid item xs={12} sx={{ marginBottom: 2, width: '100%' }}>

                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}> {/* Filter Section */}
                    <Divider />
                    <Grid container>
                        {
                            data && data.map(caseData => (
                                <Grid item sx={{width:  '100%', marginY: 2}}>
                                    <CaseElement data={caseData} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default BrowseCases;