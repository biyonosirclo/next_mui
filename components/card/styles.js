import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        marginTop:30
    },
    media: {
        height: 140,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
    },
    title:{
        textAlign:'center',
        fontSize:'24px',
        '&:hover':{
            color:'#f00',
        },
        [theme.breakpoints.down(768)] : {
            textAlign:'left',
            fontSize:'18px',
        }
    },
    desc: {
        maxHeight: 100,
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        overflow: 'hidden',
        [theme.breakpoints.down(768)] : {
            maxHeight: 42,
        }
    }   
}));