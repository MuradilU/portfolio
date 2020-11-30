import React from "react"
import { Nav, Side } from "@components"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Side />
      {children}
    </div>
  )
}

export default Layout
