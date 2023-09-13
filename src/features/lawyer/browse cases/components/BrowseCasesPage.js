import React, { useEffect } from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import { Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useRequest from "../../../../functions/useRequest";
import getAllCases from "../functions/axios";

function BrowseCases() {
    const theme = useTheme();
    const { execute, data, loading, error } = useRequest(getAllCases);
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <p>Error: {error.message}</p>;
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