import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '@/components/card/styles';
import { Skeleton } from '@material-ui/lab';
export default function PageMeals() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, key) => (
                            <Grid item xs={6} md={4} lg={3} key={key}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <Skeleton 
                                            variant='rect'
                                            animation='wave'
                                            width='100%'
                                            height='140px'
                                            />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                <Skeleton variant='rect' animation='wave' width="50%" height="30px" />
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                                            <Skeleton variant='rect' animation='wave' width="100%" height="30px" />
                                            <Skeleton variant='rect' animation='wave' width="100%" height="30px" />
                                            <Skeleton variant='rect' animation='wave' width="100%" height="30px" />
                                            <Skeleton variant='rect' animation='wave' width="100%" height="30px" />
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                        ))
                    }

                </Grid>
            </Container>
        </div>
    )
}
