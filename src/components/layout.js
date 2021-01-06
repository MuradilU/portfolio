import React from "react"
import { GlobalStyle } from "@styles"
import { Nav, Side, Background } from "@components"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <Background />
      <Side />
      <div>{children}</div>
    </React.Fragment>
  )
}

export default Layout
