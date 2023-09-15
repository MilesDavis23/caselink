import React, { useEffect } from 'react';
import CaseElement from './CaseElement';
import {
    Grid,
    Divider
} from '@mui/material';
import useRequest from '../../../../functions/custom hooks/useRequest';
import getLawyerMyCases from '../funtions/axios';
import { useTheme } from 'styled-components';

function LMyCaseList() {
    const theme = useTheme();
    const { execute, data, loading, error } = useRequest(getLawyerMyCases);
    useEffect(() => { execute() }, []);
    if (loading) {
        return <p> Loading.. </p>
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

export default LMyCaseList;



    /* test case  
    const [myCase, setMyCase] = React.useState([]);

    React.useEffect(
        () => {
            let myCaseEndPoint = 'http://localhost:3002/api/lawyer/my-cases';
            fetchMyCases(myCaseEndPoint, setMyCase);
        }, []
    );
    */