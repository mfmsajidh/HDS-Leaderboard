import deepOrange from "@material-ui/core/es/colors/deepOrange";

const UserRecordStyle = theme => ({
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

export default UserRecordStyle;