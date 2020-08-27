import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: '60%',
    position: 'relative',
  },
  empty: {
    position: 'absolute',
    top: '50%',
    left: '40%',
  },
  pagination: { position: 'absolute', bottom: '0', right: '0' },
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    width: '35%',
    margin: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  inputsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '48%',
    },
  },
}));
