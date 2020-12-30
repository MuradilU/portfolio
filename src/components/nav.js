import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { Link } from "gatsby"
import styled from "styled-components"
import { nav } from "@config"
import { Icon } from "@icons"

const StyledHeader = styled.header`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 10px 60px;
`

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
`

const StyledLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: inline;
    margin: 0 10px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.5px;
      color: var(--font-color);
    }
  }
`

const StyledThemeToggle = styled.div`
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  input[type="checkbox"]:checked + label {
    background: var(--primary-color);
  }
  input[type="checkbox"]:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
  }
  label:after {
    content: ${props => props.themeIconString};
    position: absolute;
    top: 3px;
    left: 4px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 1.6em;
    transition: 0.3s;
  }
  label:active:after {
    width: 25px;
  }
`

const Nav = () => {
  const [themeIconString, setThemeIconString] = React.useState("")

  React.useEffect(() => {
    const theme = localStorage.getItem("theme")
    setThemeIconString(
      encodeURIComponent(
        renderToStaticMarkup(
          <Icon icon={theme === "light" ? "github" : "gmail"} />
        )
      )
    )
  }, [])

  const switchTheme = event => {
    console.log("switched")
    const toggleStatus = event.target.checked
    setThemeIconString(
      encodeURIComponent(
        renderToStaticMarkup(<Icon icon={toggleStatus ? "github" : "gmail"} />)
      )
    )
    document.documentElement.setAttribute(
      "data-theme",
      toggleStatus ? "light" : "dark"
    )
    localStorage.setItem("theme", toggleStatus ? "light" : "dark")
  }
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          {nav.map(({ name, url }) => (
            <li key={name}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
        </StyledLinks>
        <StyledThemeToggle
          dataUri={`url("data:image/svg+xml,${themeIconString}")`}
        >
          <input id="theme-toggle" type="checkbox" onClick={switchTheme} />
          <label htmlFor="theme-toggle">Theme Toggle</label>
        </StyledThemeToggle>
      </StyledNav>
    </StyledHeader>
  )
}

export default Nav
