import * as React from 'react';
import {
    Grid,
    Button,
    TextField,
    FormControl,
    Select,
    Chip,
    MenuItem,
    Paper,
    Alert
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import useRequest from '../../../../functions/custom hooks/useRequest';
import createACase from '../functions/axios';
import { AltRoute } from '@mui/icons-material';



function MakeACase() {
    const theme = useTheme();
    const { control, handleSubmit, setValue, watch, formState: { errors }} = useForm();
    const { execute, loading, data, error } = useRequest(createACase);
    const [generalError, setGeneralError] = useState(null);
    const watchedCategories = watch("categories")
    console.log(watchedCategories)

    /* 'Chip' logic:  */
    const [chipData, setChipData] = React.useState([]);
    const categories = ['Criminal', 'Civil', 'Propery Law', 'Sports Law', 'Human Rigths']
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (!chipData.some(chip => chip.label === selectedCategory)) {
            const newChipData = [...chipData, { key: Date.now(), label: selectedCategory }];
            setChipData(newChipData);
            setValue("categories", newChipData.map(chip => chip.label));
        }
    }; /* closure: */
    const handleDelete = (chipToDelete) => () => {
        const newChipData = chipData.filter((chip) => chip.key !== chipToDelete.key);
        setChipData(newChipData);
        setValue("categories", newChipData.map(chip => chip.label));
    };

    const onSubmit = async (data) => {
        if (Object.keys(errors).length > 0) {
            // There are validation errors
            setGeneralError("Please correct the errors before submitting.");
            return;
        }
        try {
            const response = await execute(
                data.title, 
                data.shortDescription,
                data.longDescription, 
                JSON.stringify(data.categories), 
            );
            console.log(data)
            console.log('Case created.', response)
            console.log(data.categories)
        } catch (error) {
            console.error('Error creating case:', error )
            setGeneralError(error.message || "An unexpected error occurred.");
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
                            rules={{ required: true, minLength: 1 }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label=""
                                    variant='standard'
                                    rows={1}
                                    placeholder={field.value ? "" : "Enter title"}
                                />
                            )}
                        />
                    {errors?.title && errors.title.type === "required" && <Alert severity="error" sx={{margin: 2}}>This field is required</Alert>}
                    {errors?.title && errors.title.type === "minLength" && <Alert severity="error" sx={{margin: 2}}> Title must be longer. </Alert>}

                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <Controller
                            name="shortDescription"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, minLength: 10 }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={4}
                                    placeholder={field.value ? "" : "Sum up what happened..."}
                                />
                            )}
                        />

                    {errors?.shortDescription && errors.shortDescription.type === "required" && <Alert severity="error" sx={{margin: 2}}> This field is required. </Alert>}
                    {errors?.shortDescription && errors.shortDescription.type === "minLength" && <Alert severity="error" sx={{margin: 2}}> Title must be longer. </Alert>}

                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <Controller
                            name="longDescription"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, minLength: 50 }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    sx={{ width: '100%', margin: 0 }}
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={6}
                                    placeholder={field.value ? "" : "Explain your problem in detail..."}
                                />
                            )}
                        />
                    {errors?.longDescription && errors.longDescription.type === "required" && <Alert severity="error" sx={{margin: 2}}> This field is required. </Alert>}
                    {errors?.longDescription && errors.longDescription.type === "minLength" && <Alert severity="error" sx={{margin: 2}}> Title must be longer. </Alert>}

                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2 }}>
                    <Grid item xs={12}>
                        {chipData.length > 0 && (
                            <Paper
                                sx={{
                                    widt: '100%',
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
                                            sx={{ marginRight: 1 }}
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
                            rules={{ validate: value => value.length > 0 || "Please select at least one category." }}
                            render={({ field }) => (
                                <input type="hidden" {...field} />
                            )}
                        />
                    </Grid>
                </Grid>
                {errors?.categories && <Alert severity="error" sx={{margin: 2}}> You must choose at least one category. </Alert>}


                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Grid item xs={12} sx={{ marginRight: 0 }}>
                        <Button type="submit" variant='contained' sx={{ width: 1 }}>
                            Submit Case
                        </Button>
                    </Grid>
                </Grid>

            </form>

            {error && <Alert severity="error" sx={{margin: 2, width: '100%'}}> {error.message} </Alert>}
            {data &&  <Alert severity='success' sx={{margin: 2, width: '100%'}}> Case successfully created! </Alert> }
        </>
    )
};

export default MakeACase;
