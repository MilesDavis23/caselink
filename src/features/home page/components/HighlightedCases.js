import React, { useEffect } from 'react';
import { getHighlights } from '../functions/axios';
import { Grid, Divider, Alert } from '@mui/material';
import CaseElement from '../../lawyer/mycases list/components/CaseElement';
import { useTheme } from 'styled-components';
import useRequest from '../../../functions/custom hooks/useRequest';

const HighightedCases = () => {
    const theme = useTheme();
    const { execute, data, loading, error } = useRequest(getHighlights);
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p> Loading... </p>
    }
    if (error) {
        return <Alert severity='error'> {error.message} </Alert>
    }
    console.log(data);

    return (
        <>
            <Grid container>
                <Grid item xs={12}> {/* Filter Section */}
                    <Divider />
                    <Grid container>
                        {
                            data && data.slice(0, 2).map(caseData => (
                                <Grid item sx={{ width: '100%', marginY: 2 }}>
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


export default HighightedCases