import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} onClick={()=> {router.push('/')}}>
                        NextMui
                    </Typography>
                    <Button 
                        color="inherit"
                        onClick={()=> {router.push('/')}}
                    >Home</Button>
                    <Button 
                        color="inherit"
                        onClick={()=> {router.push('/component')}}
                    >Component</Button>
                    <Button 
                        color="inherit"
                        onClick={()=> {router.push('/meals')}}
                        >Meals</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
