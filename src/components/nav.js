import React from "react"
import { nav } from "@config"

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          {nav.map(link => (
            <li key={link.name}>{link.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
