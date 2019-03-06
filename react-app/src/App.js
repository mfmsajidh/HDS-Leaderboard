import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from "@material-ui/core/es/colors/deepOrange";

// const styles = theme => ({
//     root: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//     },
// });
//
// function PaperSheet(props) {
//     const { classes } = props;
//
//     return (
//         <div>
//             <Paper className={classes.root} elevation={24}>
//                 <Typography variant="h5" component="h3">
//                     Sajidh Farook
//                 </Typography>
//                 <Typography component="p">
//                     Paper can be used to build surface or other elements for your application.
//                 </Typography>
//             </Paper>
//         </div>
//     );
// }
//
// PaperSheet.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(PaperSheet);

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: `0 ${theme.spacing.unit * 3}px`
    },
    paper: {
        maxWidth: 700,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)'
    },
    orangeAvatar: {
        color: '#000000',
        backgroundColor: deepOrange[500]
    }
});

function App(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
                <Grid container wrap="nowrap" spacing={16}>
                    <Grid item>
                        <Avatar className={classes.orangeAvatar}>1</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography variant={"h4"} color={"textPrimary"}>Sajidh Farook</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

App.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(styles)(App);