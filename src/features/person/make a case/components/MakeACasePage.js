import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Grid,
    Button,
    TextField,
    FormControl,
    Select,
    Chip,
    MenuItem,
    Paper
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useRequest from '../../../../functions/useRequest';
import createACase from '../functions/axios';


function MakeACase() {
    const theme = useTheme();
    const { control, handleSubmit, register } = useForm();
    const { execute, loading, data, error } = useRequest(createACase);


    /* 'Chip' logic:  */
    const [chipData, setChipData] = React.useState([]);
    const categories = ['Criminal', 'Civil', 'Propery Law', 'Sports Law', 'Human Rigths',]
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (!chipData.some(chip => chip.label === selectedCategory)) {
            setChipData(prev => [...prev, { key: Date.now(), label: selectedCategory }]);
        }
    }; /* closure: */
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const onSubmit = async (data) => {
        try {
            const response = await execute(
                1, 
                data.title, 
                data.shortDescription,
                data.longDescription, 
                JSON.stringify(data.categories), 
            );
            console.log(data)
            console.log('Case created.', response)
        } catch (error) {
            console.error('Error creating case:', error )
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: 20 }}>

                <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingBottom: 2 }}>
                    <Grid item sx={{ width: '100%' }} xs={12}>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label=""
                                    variant='standard'
                                    rows={1}
                                    placeholder="Enter title..."
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <Controller
                            name="shortDescription"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={4}
                                    placeholder="Explain your problem in a few words. "
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <Controller
                            name="longDescription"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={6}
                                    placeholder="Explain your problem in detail..."
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2 }}>
                    <Grid item xs={12}>
                        {chipData.length > 0 && (
                               <Paper
                               sx={{
                                   display: 'flex',
                                   justifyContent: 'flex-start', // Align chips to the start
                                   flexWrap: 'wrap',
                                   listStyle: 'none',
                                   p: 0.5,
                                   m: 1,
                               }}
                               component="ul"
                           >
                               {chipData.map((data) => (
                                   <li key={data.key} sx={{ margin: 1 }}> 
                                       <Chip
                                           sx={{marginRight: 1}}
                                           label={data.label}
                                           onDelete={handleDelete(data)}
                                       />
                                   </li>
                               ))}
                           </Paper>
                        )} 
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Select onChange={handleCategoryChange}>
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="categories"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <input type="hidden" {...field} value={JSON.stringify(chipData.map(chip => chip.label))} />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Grid item xs={12} sx={{ marginRight: 0 }}>
                        <Button type="submit" variant='contained' sx={{ width: 1 }}>
                            Submit Case
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </>
    )
};

export default MakeACase;