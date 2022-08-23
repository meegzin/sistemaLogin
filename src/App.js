import React from 'react'
import GlobalStyle from "./styles/global"
import RoutesApp from './routes'
import { LoginAuthenticatorProvider } from "./contexts/LoginAuthenticator"

const App = () => {
  return (
    <>
    <LoginAuthenticatorProvider>
      <RoutesApp />
      <GlobalStyle />
    </LoginAuthenticatorProvider>
    </>
  )
}

export default App