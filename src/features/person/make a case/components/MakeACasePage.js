import * as React from 'react';
import {
    Grid,
    Button,
    TextField,
    FormControl,
    Box,
    Chip,
    MenuItem,
    Checkbox,
    ListItemText,
    Alert,
    Select,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import useRequest from '../../../../functions/custom hooks/useRequest';
import createACase from '../functions/axios';

/* Give title to the case: */
const TitleInput = ({ control, errors }) => (
    <>
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
                    placeholder={field.value ? "" : "Give a title to your case"}
                />
            )}
        />
        {errors?.title && errors.title.type === "required" && <Alert severity="error" sx={{ margin: 2 }}>This field is required</Alert>}
        {errors?.title && errors.title.type === "minLength" && <Alert severity="error" sx={{ margin: 2 }}> Title must be longer. </Alert>}
    </>
);
/* Give a short description to the case: */
const ShortDescription = ({ control, errors }) => (
    <>
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
        {errors?.shortDescription && errors.shortDescription.type === "required" && <Alert severity="error" sx={{ margin: 2 }}> This field is required. </Alert>}
        {errors?.shortDescription && errors.shortDescription.type === "minLength" && <Alert severity="error" sx={{ margin: 2 }}> Title must be longer. </Alert>}
    </>
);
/* Long description: */
const LongDescription = ({ control, errors }) => (
    <>
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
        {errors?.longDescription && errors.longDescription.type === "required" && <Alert severity="error" sx={{ margin: 2 }}> This field is required. </Alert>}
        {errors?.longDescription && errors.longDescription.type === "minLength" && <Alert severity="error" sx={{ margin: 2 }}> Title must be longer. </Alert>}
    </>
);
/* Tags: */
const CategoryTags = ({ control, errors }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmitKey = (event, field) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            const value = event.target.value.trim();
            if (value && !field.value.includes(value)) {
                field.onChange([...field.value, value])
                setInputValue('');
            }
        }
    };

    const handleDelete = (field, tagToDelete) => () => {
        field.onChange(field.value.filter((tag) => tag !== tagToDelete)); // using field.onChange to update form state    
    };

    return (
        <>
            <Controller
                name="categoryTags"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                    <>
                        <Typography sx={{ p: 1, color: '#FFFDF7' }}>
                            Add some relating "keywords"!
                        </Typography>
                        <Box sx={{
                            backgroundColor: 'transparent',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            p: 0.5,
                            m: 0.5
                        }} component="ul">
                            {field.value.map((tag, index) => (
                                <li key={index} sx={{ margin: 1}}>
                                    <Chip
                                        sx={{ marginRight: 1, marginTop: 1 }}
                                        label={tag}
                                        onDelete={handleDelete(field, tag)}
                                    />
                                </li>
                            ))}
                        </Box>
                        <FormControl fullWidth>
                            <TextField
                                id="category-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(event) => handleSubmitKey(event, field)}
                                placeholder="Type and press 'Enter' to add categories"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                    </>
                )}
            />
            {errors?.categoryTags && <Alert severity="error" sx={{ margin: 2 }}> This field is required. </Alert>}
        </>
    );
};

const CategoryList = ({ control, errors, categories }) => (
    <>
        <Typography sx={{ p: 1, color: '#FFFDF7'}}>
            Please select a suiting category for your case:
        </Typography>
        <Controller
            name='categories'
            control={control}
            defaultValue={[]}
            render={({ field }) => (
                <FormControl fullWidth sx={{ width: '100%' }}>
                    <Select
                        {...field}
                        fullWidth
                        sx={{width:'100%'}}
                        multiple
                        renderValue={ (selected) => selected.join(', ')  }
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                <Checkbox checked={field.value.indexOf(category) > -1} />
                                <ListItemText primary={category} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        />
        {errors.categories && <Alert severity="error" sx={{margin: 2}}> You must choose at least one category. </Alert>}
    </>
);

const MakeACase = () => {
    const theme = useTheme();
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const { execute, loading, data, error } = useRequest(createACase);
    const [generalError, setGeneralError] = useState(null);
    /* change the categories: */
    const categories = ['Criminal', 'Civil', 'Labour', 'Property Law', 'Human Rigths', 'Traffic Law']

    const onSubmit = async (data) => {
        if (Object.keys(error).length > 0) {
            //validations:
            setGeneralError('Please correct the errors before submitting.');
            return;
        }
        try {
            const response = await execute(
                /* tags and the modifed categories are not added */
                data.title, 
                data.shortDescription, 
                data.longDescription, 
                JSON.stringify(data.categories),
                JSON.stringify(data.categoryTags) // category tags as JSON 
            );
            console.log('Case created.', response)
        } catch (error) {
            setGeneralError(error.message || 'An unexpected error occurred.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%', marginTop: 40}}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingBottom: 2 }}>
                    <Grid item sx={{width: '100%'}}>
                        <TitleInput control={control} errors={errors} />
                    </Grid>
                </Grid>

                <Grid container sx={{paddingY: 2, borderBottom: '1px solid white'}}>
                    <Grid item xs={12}>
                        <ShortDescription control={control} errors={errors}/>
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <LongDescription control={control} errors={errors}  />
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <CategoryList control={control} errors={errors} categories={categories}/>
                    </Grid>
                </Grid>

                <Grid container sx={{ paddingY: 2, borderBottom: '1px solid white' }}>
                    <Grid item xs={12}>
                        <CategoryTags control={control} errors={errors}/>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Grid item xs={12} sx={{ paddingY: 2,  marginRight: 0 }}>
                        <Button type="submit" variant='contained' sx={{ width: 1 }}>
                            Submit Case
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default MakeACase;