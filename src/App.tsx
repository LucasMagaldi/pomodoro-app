import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles/Global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
        App
      <GlobalStyle/>
    </ThemeProvider>
  )
}

