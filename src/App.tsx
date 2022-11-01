import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ItemsContextProvider } from './contexts/ItemsContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ItemsContextProvider>
            <Router />
            <GlobalStyle />
          </ItemsContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}

