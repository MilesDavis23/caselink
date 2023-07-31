import * as React from 'react';
import { useTheme, Grid, Box } from '@mui/material'
import CaseElement from '../case element/components/CaseElement';

function MyCaseList() {
    return (
        <>
            <Grid container>
                <Grid item sx={{padding: 2}}>
                    <CaseElement  />
                </Grid>
                <Grid item sx={{padding: 2}}>
                    <CaseElement  />
                </Grid>
                <Grid item sx={{padding: 2}}>
                    <CaseElement  />
                </Grid>
                <Grid item sx={{padding: 2}}>
                    <CaseElement  />
                </Grid>
            </Grid>
        </>
    )
}

export default MyCaseList;