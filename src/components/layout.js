import React from "react"
import { Nav } from "@components"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
