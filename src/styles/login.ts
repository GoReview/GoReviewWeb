import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  content: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  login: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
