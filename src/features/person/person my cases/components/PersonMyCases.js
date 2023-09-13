import React, { useEffect } from 'react';
import {
    Grid,
    Divider
} from '@mui/material';
import CaseElement from '../../../lawyer/mycases list/components/CaseElement';
import { useTheme } from 'styled-components';
import useRequest from '../../../../functions/useRequest';
import getAllMyCases from '../functions/axios';

function PersonMyCaseList() {
    const theme = useTheme();
    const { execute, data, loading, error } = useRequest(getAllMyCases);
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p> Loading... </p>
    } 
    if (error) {
        return <p> Error: {error.message} </p>
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

export default PersonMyCaseList;