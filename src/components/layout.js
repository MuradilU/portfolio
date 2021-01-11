import React from "react"
import { GlobalStyle } from "@styles"
import { SEO, Nav, Side, Background } from "@components"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <GlobalStyle />
      <Nav />
      <Background />
      <Side />
      <div>{children}</div>
    </React.Fragment>
  )
}

export default Layout
