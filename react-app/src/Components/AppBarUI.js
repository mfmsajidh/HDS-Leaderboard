import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBarStyle from "../Styles/AppBarStyle"
import Typography from "@material-ui/core/Typography";

function AppBarUI(props) {
    const { classes } = props;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                        <Typography variant={"h4"} color={"textPrimary"} className={classes.typography}><i className='fas fa-clock'/> 5:30</Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

AppBarUI.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(AppBarStyle)(AppBarUI);