import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {purple, pink} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#ce93d8',
    main: '#ba68c8',
    dark: '#ea80fc',
    contrastText: 'Purple',
  },
  secondary: {
    light: '#f8bbd0',
    main: '#f48fb1',
    dark: '#ff80ab',
    contrastText: '#000',
  },
    openTitle: purple['700'],
    protectedTitle: pink['700'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
