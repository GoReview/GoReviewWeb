import { Box, Button, Container, TextField, Typography } from '@material-ui/core'
import { useStyles } from '../styles/login'


export default function SignIn() {
  const styles = useStyles()

  return (
    <Box className={styles.content}>
      <Container className={styles.login}>
        <Typography variant="h5" >
          Log in
        </Typography>
        <form className={styles.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
      </Container>
    </Box>
  );
}