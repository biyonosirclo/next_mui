import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

function CardMeals(props) {
    const classes = useStyles();
    const {title,images,desc} = props;
    console.log(props)
    return (
        <div>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={images}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardMeals