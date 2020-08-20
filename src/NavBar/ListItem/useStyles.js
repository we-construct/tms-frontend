import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: '#000',
        '&::hover': {
            color: '#fb500c',
        }
    },

})