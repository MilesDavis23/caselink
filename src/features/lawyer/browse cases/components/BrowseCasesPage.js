import React from "react";
import { useState } from "react";
import { useTheme, Grid, Box } from '@mui/material'
import NavBar from "../../../navbar/Navbar";
import SideBar from "../../lawyer sidebar/LawyerSideBar";
import MyCaseList from "../../mycases list/components/MyCaseList";

function BrowseCases(){
    const theme = useTheme();
    const [ myCases, setMyCases ] = useState(false);

    return(
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                height: '100vh',
                overflow: 'auto',
            }}>
                <Grid container  sx={{ height: '100%' }}>
                    <Grid item xs={4} >
                        <Grid container sx={{ borderRight: '0.5px solid #FFFDF7', paddingRight: 2, height: '100%' }}>
                            <Grid item xs={12}  >
                                <SideBar setMyCases={setMyCases} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} justifyContent="center" alignItems="center" sx={{ paddingLeft: 2, height: '100%', overflow: 'auto' }}>
                        <Grid container>
                            {myCases &&
                                <>
                                    <MyCaseList />
                                    <Grid item xs={12}>Item 3</Grid>
                                    <Grid item xs={12}>Item 4</Grid>
                                </>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BrowseCases;