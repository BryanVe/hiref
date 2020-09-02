import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/core"
import { Provider as StoreProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import configureStore from "./store"
import theme from "./theme"
import App from "./App"
import "./index.css"

const store = configureStore()

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById("root")
)
