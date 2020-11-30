import React from "react"
import { GlobalStyle } from "@styles"
import { Nav, Side } from "@components"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <Side />
      {children}
    </React.Fragment>
  )
}

export default Layout
