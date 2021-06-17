import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue[600],
    },
  },
  zIndex: {
    drawer: 1
  }
})