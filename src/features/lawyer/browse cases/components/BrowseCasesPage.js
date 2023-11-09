import React, { useContext } from "react";
import CaseElement from "../../mycases list/components/CaseElement";
import { Alert, Divider, Grid, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CaseContext from "../context/caseContext";

const BrowseCases = () => {
    const theme = useTheme();
    const { cases:data, loading, error } = useContext(CaseContext);

    //console.log('Browse cases data:', data);

    return (

        <>
            <Grid container>
                <Grid item xs={12}> {/* Filter Section */}
                    <Divider />
                    <Grid container>
                        {
                            data && data.map(caseData => (
                                <Grid item sx={{width:  '100%', marginY: 2}}>
                                    <CaseElement key={caseData.case_id} data={caseData} />
                                </Grid>
                            ))
                        }
                        {
                            loading &&
                            <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                <CircularProgress />
                            </Grid>
                        }
                        {error &&  <Alert severity="error" sx={{ margin: 1, width: '100%' }}> {error.message} </Alert>}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default BrowseCases;