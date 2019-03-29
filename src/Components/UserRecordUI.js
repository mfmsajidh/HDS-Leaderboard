import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import UserRecordStyle from "../Styles/UserRecordStyle";

function UserRecordUI(props) {
    const {classes} = props;

    return (
        <div>
            <div className={"split left"}>
                <div className={classes.root}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar className={classes.orangeAvatar}>1</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant={"h4"} color={"textPrimary"}>SAJIDH FAROOK</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> 10</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>

            <div className={"split right"}>
                <div className={classes.root}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar className={classes.orangeAvatar}>1</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant={"h4"} color={"textPrimary"}>SAJIDH FAROOK</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> 10</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>


    );
}

UserRecordUI.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(UserRecordStyle)(UserRecordUI);