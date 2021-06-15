import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from "../styles/theme"


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
