import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ItemsContextProvider } from './contexts/ItemsContext'
import { UserInfoContextProvider } from './contexts/UserInfoContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ItemsContextProvider>
            <UserInfoContextProvider>
              <Router />
              <GlobalStyle />
            </UserInfoContextProvider>
          </ItemsContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}

