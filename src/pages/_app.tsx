import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { AuthProvider } from '../contexts/AuthContext'
import { theme } from "../styles/theme"


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
