import * as React from 'react';
import jessica from '../images/Screenshot 2023-08-04 at 1.29.40.png'
import gates from '../images/licensed-image.jpeg'
import gandalf from '../images/Screenshot 2023-08-04 at 1.28.06.png'
import { Paper, Grid, Typography, Avatar, Rating } from '@mui/material';

function LatestReviews() {
    const reviews = [
        { name: 'Jessica Rabit', rating: 4, comment: 'Great service and very professional!', img: jessica },
        { name: 'Bill Gates', rating: 5, comment: 'Highly recommend! Excellent work.', img: gates },
        { name: 'Gandalf', rating: 3, comment: 'Good, but there is room for improvement.', img: gandalf },
    ];

    return (
        <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Latest Reviews
            </Typography>
            <Grid container spacing={2}>
                {reviews.map((review, index) => (
                    <Grid item xs={12} key={index} sx={{ borderBottom: index < reviews.length - 1 ? '1px solid #ddd' : 'none', paddingBottom: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs={2}>
                                <Avatar src={review.img} sx={{ width: 50, height: 50 }}></Avatar>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant="subtitle1"><strong>{review.name}</strong></Typography>
                                <Rating value={review.rating} readOnly />
                                <Typography variant="body2">{review.comment}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default LatestReviews;
