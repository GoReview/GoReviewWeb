import { Box, Button, Container, TextField, Typography, Paper, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { FormEvent, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
  login: {
    maxWidth: 420,
    padding: 20,
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

export default function SignIn() {
  const styles = useStyles()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <Box
      height='100vh'
      display='flex'
      alignItems= 'center'
      justifyContent='center'
    >
      <Paper className={styles.login} elevation={3}>
        <Typography variant="h5" >
          Log in
        </Typography>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Log in
          </Button>
        </form>
      </Paper>
    </Box>
  );
}