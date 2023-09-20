/* Here should be the whole component for changing status  */
import React, {useState} from 'react';
import { Grid, Box, Typography, Button, Dialog, DialogTitle, DialogContent, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import getColor from '../../mycases list/funtions/getStatusColor';
import changeStatus from '../functions/changeColorFunc';

const StatusPanel = ({ statusColor, data, caseId }) => {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(data && data[0].status);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };
    const confirmStatusChange = async () => {
        try {
            const response = await changeStatus(caseId, selectedStatus);
            if (response.data.success) {

                console.log(response.data.message);
            } else {

                console.error(response.data.message);
            }
        } catch (error) {

            console.error('Error updating the status:', error);
        }
        handleClose();
    }

    return (
        <>
            <Grid container sx={{ marginTop: '20px', marginBottom: '20px', border: '1px solid white', borderRadius: '5px' }}>
                <Grid item xs={12}>
                    <Box sx={{ width: 1, bgcolor: 'background.paper' }}>
                        <Box sx={{ width: 1, borderBottom: '1px solid white', padding: '10px' }} >
                            <Grid container justifyContent='space-between'>
                                <Grid item>
                                    <Typography variant="h6" component="div">
                                        Current Status:
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ ...getColor(statusColor) }} >
                                    <Typography variant="overline" display="block" gutterBottom sx={{ fontSize: 15, marginRight: 2 }}>
                                        {data && data[0].status}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container >
                            <Grid item xs={12} sx={{ margin: 2, padding: 2 }} >
                                <Button severity="warning" onClick={handleOpen} component={Link} to="" variant='outlined' sx={{ width: 1 }}>
                                    Change Status
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {bgcolor: '#221C1F', width: '70%'} }}  >
                <DialogTitle>Change Status</DialogTitle>

                <DialogContent>
                    <Grid container style={{ displat: 'flex', alignItems: 'center' }} justifyContent='space-between'>
                        <Grid item>
                            <Typography>
                                Current Status:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="overline"  gutterBottom sx={{ ...getColor(statusColor), fontSize: 15, marginLeft: 5 }}>
                                {data && data[0].status}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        fullWidth
                        sx={{
                            '& .MuiSelect-select': getColor(selectedStatus)
                        }}

                    >
                        <MenuItem value="active" sx={{ ...getColor('active')}} > Active </MenuItem>
                        <MenuItem value="closed" sx={{ ...getColor('closed')}} > Closed </MenuItem>
                        <MenuItem value="warning" sx={{ ...getColor('offer sent')}} > Warning </MenuItem>

                    </Select>
                </DialogContent>
                <Button onClick={confirmStatusChange} color="primary">
                    Confirm
                </Button>
            </Dialog>
        </>
    );
};

export default StatusPanel;
