import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { nav } from "@config"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  width: 100%;
  height: var(--nav-height);
  background: var(--bg-color);
  z-index: 10;
  transition: transform 200ms ease-in;

  ${props =>
    props.showNav &&
    !props.atTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    `};

  ${props =>
    !props.showNav &&
    !props.atTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-height) * -1));
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    `};

  @media screen and (max-width: 750px) {
    padding: 0 40px;
  }
`

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const StyledMenu = styled.div`
  .nav-toggle {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  @media screen and (max-width: 700px) {
    .nav-toggle:checked ~ .mobile-menu {
      max-height: 100px;
      max-width: 100%;
    }

    & {
      display: flex;
      position: relative;

      .nav-icon {
        cursor: pointer;

        &:hover {
          .bar1,
          .bar2,
          .bar3 {
            background-color: var(--primary-color);
          }
        }

        .bar1,
        .bar2,
        .bar3 {
          width: 30px;
          height: 4px;
          background-color: var(--font-color);
          margin: 6px 0;
          transition: 0.4s;
        }
      }
      .nav-toggle:checked + .nav-icon {
        .bar1 {
          transform: rotate(-45deg) translate(-8px, 6px);
        }
        .bar2 {
          opacity: 0;
        }
        .bar3 {
          transform: rotate(45deg) translate(-7px, -7px);
        }
      }
    }
  }
`

const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  li {
    display: inline;
    margin: 0 10px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: var(--font-color);
      transition: color 200ms ease-in;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  @media screen and (max-width: 700px) {
    & {
      max-height: 0;
      max-width: 0;
      overflow: hidden;
    }
  }
`

const StyledThemeToggle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + label {
      &:before {
        background-color: var(--primary-color);
        transform: translateX(22px);
      }

      &:after {
        transform: translateX(75px) scale(1);
      }
    }
  }

  label {
    position: relative;
    display: block;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background: grey;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;

    &:before,
    &:after {
      display: block;
      position: absolute;
      content: "";
      width: 18px;
      height: 18px;
      border-radius: 1.6em;
      top: 3px;
      left: 5px;
      transition: 0.4s ease;
    }

    &:before {
      background-color: var(--primary-color);
    }

    &:after {
      background-color: grey;
      left: -55px;
      transform: scale(0.00001);
    }
  }
`

const StyledResponsiveLinks = styled.ul`
  position: absolute;
  list-style: none;
  padding: 10px 20px;
  top: 20px;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  border-radius: 2px;
  display: hidden;
  opacity: 0;
  pointer-events: none;

  li {
    margin: 0 10px;
    padding: 10px 0;

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.5px;
      color: var(--font-color);
      transition: color 200ms ease-in;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  @media screen and (max-width: 700px) {
    & {
      transition: all 300ms ease-in-out;
    }
    input:checked ~ & {
      pointer-events: all;
      opacity: 1;
      transform: translateY(10px);
    }
  }
`

let scrollPosition

const Nav = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const [theme, setTheme] = React.useState("")
  const [scrollState, setScrollState] = React.useState({
    show: true,
    scrollPosition: -1,
    atTop: true,
  })

  scrollPosition = scrollState.scrollPosition

  const handleScroll = () => {
    if (typeof window !== `undefined`) {
      const newY = window.scrollY
      setScrollState({
        show: newY <= 100 || newY < scrollPosition,
        scrollPosition: newY,
        atTop: newY < 50,
      })
    }
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)
    window.addEventListener("scroll", handleScroll)

    const theme = localStorage.getItem("theme")
    if (theme === "dark" || theme === null) {
      setTheme("dark")
      switchTheme(true)
    } else {
      setTheme("light")
      switchTheme(false)
    }

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const switchTheme = checked => {
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "dark" : "light"
    )
    setTheme(checked ? "dark" : "light")
    localStorage.setItem("theme", checked ? "dark" : "light")
  }

  return (
    <StyledHeader atTop={scrollState.atTop} showNav={scrollState.show}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade-in-down" timeout={2000}>
              <StyledMenu
                style={{ transitionDelay: `${nav.length * 100 - 100}ms` }}
              >
                <input
                  type="checkbox"
                  className="nav-toggle"
                  name="nav-toggle"
                  id="nav-toggle"
                />
                <label htmlFor="nav-toggle" className="nav-icon">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </label>
                <StyledResponsiveLinks>
                  {nav.map(({ name, url }, index) => (
                    <li
                      key={index}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  ))}
                </StyledResponsiveLinks>
              </StyledMenu>
            </CSSTransition>
          )}
        </TransitionGroup>
        <StyledLinks>
          <TransitionGroup component={null}>
            {isMounted &&
              nav.map(({ name, url }, index) => (
                <CSSTransition
                  key={name}
                  classNames="fade-in-down"
                  timeout={2000}
                >
                  <li style={{ transitionDelay: `${index * 100}ms` }}>
                    <Link to={url}>{name}</Link>
                  </li>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledLinks>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade-in-down" timeout={2000}>
              <StyledThemeToggle
                style={{ transitionDelay: `${nav.length * 100}ms` }}
              >
                <input
                  id="theme-toggle"
                  type="checkbox"
                  onClick={event => {
                    switchTheme(event.target.checked)
                  }}
                  defaultChecked={theme === "dark"}
                />
                <label htmlFor="theme-toggle">Theme Toggle</label>
              </StyledThemeToggle>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  )
}

export default Nav
